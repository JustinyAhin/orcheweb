<script lang="ts">
	import { page } from '$app/stores';

	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="OrcheWeb • Building open source apps for the web"
	description="OrcheWeb is a 'lab' where we build open source apps for the web."
	canonical={$page.url.href}
	openGraph={{
		images: [
			{
				url: 'https://res.cloudinary.com/orcheweb/image/upload/v1663602683/orcheweb/orcheweb-og-image_fqmitu.png',
				width: 1500,
				height: 780,
				alt: 'OrcheWeb open graph image'
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image',
		handle: '@iamsegbedji'
	}}
/>

<section class="bg-jungle-green h-screen flex items-center">
	<div class="main-container">
		<div class="pt-16 pb-32 space-y-6">
			<h1 class="sm:w-10/12 text-light-cyan">Building open source apps for the web</h1>
			<p class="text-2xl sm:w-8/12 text-light-cyan">
				OrcheWeb is a "lab" where we build open source apps for the web.
			</p>

			<a href="/apps/gl" class="action-default bg-light-cyan text-jungle-green shadow-default"
				>Our apps</a
			>
		</div>
	</div>
</section>
