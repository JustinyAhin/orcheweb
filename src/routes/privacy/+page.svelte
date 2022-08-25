<script lang="ts">
	import { page } from '$app/stores';
	import Head from '$lib/components/Head.svelte';

	const url = $page.url.href;
</script>

<svelte:head>
	<Head pageTitle="Privacy Policy" description="Privacy Policy for orcheweb.com" canonical={url} />
</svelte:head>

<section class="py-32 space-y-8 main-container">
	<h1>Privacy Policy</h1>

	<div class="content">
		<p>
			This website uses splitbee.io as an analytics tool. This allows us to collect basic statistics
			on the number of visitors, the most viewed pages/articles, etc on the website.
		</p>
		<p>
			To function, Splitbee adds a cookie named sb_uid to your browser for a period of 12 months.
			Disable tracking You can opt out of being tracked on the site by navigating to
			<a href="https://www.orcheweb.com/?dnt" class="default">https://www.orcheweb.com/?dnt</a>.
		</p>
	</div>
</section>
