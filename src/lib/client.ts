import { Octokit } from "octokit";

const octokitWrapper = () => {
	const octokit = new Octokit();

	return octokit;
}

export { octokitWrapper };
