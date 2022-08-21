<script lang="ts">
	export let siteName: string = 'OrcheWeb';
	export let pageTitle: string = 'OrcheWeb';
	export let slogan: string = 'Finely crafted custom websites';
	export let description: string =
		'Subscription-based web development services for coachs and consulting businesses';
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
	content="https://res.cloudinary.com/orcheweb/image/upload/v1661102583/orcheweb/orcheweb-og-image_ktsgr8.jpg"
/>

<!-- Open Graph / Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={canonical} />
<meta property="twitter:title" content={pageTitle} />
<meta property="twitter:description" content={description} />
<meta
	property="twitter:image"
	content="https://res.cloudinary.com/orcheweb/image/upload/v1661102583/orcheweb/orcheweb-og-image_ktsgr8.jpg"
/>
