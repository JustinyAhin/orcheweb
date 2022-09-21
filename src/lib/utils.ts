import { octokitWrapper } from '$lib/client';

const accountProjectRegex = /^\/?([[A-Za-z0-9_]+)\/([A-Za-z0-9_-]+)(\/?|$)/;
const githubUrlRegex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^/]+)\/([^/]+)/;

const getLatestTag = async (owner: string, repo: string) => {
	const response = await octokitWrapper().request(`GET /repos/${owner}/${repo}/releases/latest`);

	return response.data.tag_name;
};

const redirectUrl = async (repoInput: string) => {
	// Find the regex to which the repo input matches
	const matchedRegex = [accountProjectRegex, githubUrlRegex].find((regex) => regex.exec(repoInput));

	if (matchedRegex) {
		const [, owner, repo] = matchedRegex.exec(repoInput) || [];
		const tag_name = await getLatestTag(owner, repo);

		return `https://github.com/${owner}/${repo}/archive/refs/tags/${tag_name}.zip`;
	} else {
		return null;
	}
};

export { redirectUrl };
