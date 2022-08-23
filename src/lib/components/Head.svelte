<script lang="ts">
	export let siteName: string = 'OrcheWeb';
	export let pageTitle: string = 'OrcheWeb';
	export let slogan: string = 'Finely crafted marketing sites for startup founders';
	export let description: string =
		'For a fixed monthly fee, we create a custom marketing website for your startup, that will help you grow your business. No surprises, no hidden fees. Cancel anytime.';
	export let isHome: boolean = false;

	export let canonical: string = 'https://www.orcheweb.com/';
</script>

<title>{isHome ? `${siteName} - ${slogan}` : `${pageTitle} - ${siteName}`}</title>
<meta name="description" content={description} />

<!-- Canonical -->
<link rel="canonical" href={canonical} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={canonical} />
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={description} />
<meta
	property="og:image"
	content="https://res.cloudinary.com/orcheweb/image/upload/v1661293558/orcheweb/orcheweb-og-image_eaqfto.jpg"
/>

<!-- Open Graph / Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={canonical} />
<meta property="twitter:title" content={pageTitle} />
<meta property="twitter:description" content={description} />
<meta
	property="twitter:image"
	content="https://res.cloudinary.com/orcheweb/image/upload/v1661293558/orcheweb/orcheweb-og-image_eaqfto.jpg"
/>
