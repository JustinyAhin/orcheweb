<script lang="ts">
	import type { ActionData } from './$types';

	import { MetaTags } from 'svelte-meta-tags';

	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let form: ActionData;

	const { href: canonical } = $page.url;
</script>

<MetaTags
	title="gl • 1-click download for your GitHub repositories latest release"
	description="1-click download for your GitHub repositories latest release."
	canonical={$page.url.href}
	twitter={{
		cardType: 'summary_large_image',
		handle: '@iamsegbedji',
		image:
			'https://res.cloudinary.com/orcheweb/image/upload/v1663602683/orcheweb/orcheweb-og-image_fqmitu.png'
	}}
/>

<section class="space-y-8">
	<a href="/" class="link-default absolute left-4 top-4">Return to apps</a>

	<div class="space-y-2 text-center sm:w-10/12 mx-auto">
		<h1>1-click download for your GitHub repositories latest release</h1>
	</div>

	<form method="post" use:enhance>
		<div class="group">
			<input
				type="text"
				name="repo"
				id="repo"
				placeholder="Enter the path or the URL to a GitHub repository"
				required
			/>

			<button type="submit">Download</button>
		</div>
	</form>

	{#if form?.error}
		<div class="bg-ruby-red px-8 py-4 rounded-full">
			<p class="text-white font-bold">{form.message}</p>
		</div>
	{/if}

	<div class="space-y-2 text-center sm:w-10/12 mx-auto">
		<p>
			Just enter a link to a GitHub repository (eg: <a
				href="https://github.com/JustinyAhin/orcheweb"
				class="link-default">https://github.com/JustinyAhin/orcheweb</a
			>) or the path to a repo (eg:
			<span class="text-ruby-red">JustinyAhin/orcheweb</span>) and you're good to go.
		</p>

		<p>
			Much better, you can also append the repository URL or path to this site's URL to get a direct
			download link. (eg: <a href={`${canonical}?repo=JustinyAhin/orcheweb`} class="link-default"
				>{canonical}?repo=JustinyAhin/orcheweb</a
			>).
		</p>
	</div>
</section>

<style>
	.group {
		@apply flex gap-2 justify-between border border-solid border-jungle-green rounded-full p-2 w-full relative;
	}

	input {
		@apply w-full border-none outline-none ml-8;
	}

	button[type='submit'] {
		@apply bg-jungle-green text-white font-bold sm:basis-6/12 p-4 rounded-full;
	}
</style>
