<script lang="ts">
	import { page } from '$app/stores';
	import Head from '$lib/components/Head.svelte';

	const url = $page.url.href;
</script>

<svelte:head>
	<Head
		pageTitle="Stacks"
		description="Technologies we use at OrcheWeb to build websites"
		canonical={url}
	/>
</svelte:head>

<section class="py-32 space-y-8 main-container">
	<h1>Technologies we use at OrcheWeb to build websites</h1>

	<div class="content">
		<p>
			<strong
				>We strongly believe that the best way to build a website is to use the right technology</strong
			>. That's why we first listen to your needs, and then we decide which stacks will work best
			for your project use case.
		</p>

		<p>
			Depending on the level of control you need on your website, how frequently you need to update
			it, and the integrations you want to add, we will use either a static site generator,
			sometimes coupled with a headless CMS, or a full-stack framework.
		</p>

		<h2>Static website generator</h2>

		<p>
			For small websites, where you don't specifically need some features of a CMS, our go-to tool
			is a static website generator. We like to work with <a
				href="https://astro.build"
				class="default">Astro</a
			> which is a great choice in most situations and deliver great performance experience.
		</p>

		<h2>Headless CMS</h2>

		<p>
			Most websites owners need an interface to edit, add and manage content on their website. For
			those situations we use headless CMSs that allow great flexibility and customizations.
		</p>

		<p>
			Our headless CMS of choice is <a href="https://www.datocms.com" class="default">DatoCMS</a>,
			because of its flexibility and ease of use both for us as developers and for the end user.
		</p>

		<h2>Full stack framework</h2>
		<p>
			Sometimes, a static website is not enough. You might want to add a membership system to your
			site, or some other functionalities that a static website generator can't do. Using a
			full-stack framework is a great way to do this. We've worked many times with
			<a href="https://kit.svelte.dev" class="default">SvelteKit</a>, and we like to use it for all
			our projects.
		</p>
	</div>
</section>
