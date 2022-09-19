import type { PageServerLoad, Actions } from './$types';
import { error, invalid, redirect } from '@sveltejs/kit';
import { redirectUrl } from '$lib/utils';

export const load: PageServerLoad = async ({ url }) => {
	const repoUrlOrPath = url.searchParams.get('repo');

	if (repoUrlOrPath !== null) {
		const safeRepoUrlOrPath = repoUrlOrPath.trim();

		if (safeRepoUrlOrPath.length > 0) {
			const url = await redirectUrl(safeRepoUrlOrPath);

			if (url !== null) {
				throw redirect(302, url);
			}

			throw error(400, 'Invalid GitHub repo URL or path');
		} else {
			throw error(400, 'GitHub URL or path cannot be empty.');
		}
	}
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const repoUrlOrPath = formData.get('repo');

		if (repoUrlOrPath !== null) {
			const safeRepoUrlOrPath = repoUrlOrPath.toString().trim();

			if (safeRepoUrlOrPath.length > 0) {
				const url = await redirectUrl(safeRepoUrlOrPath);

				if (url !== null) {
					throw redirect(302, url);
				}

				return invalid(400, { error: true, message: 'Invalid GitHub repo URL or path.' });
			}

			return invalid(400, { error: true, message: 'GitHub URL or path cannot be empty.' });
		}
	}
};
