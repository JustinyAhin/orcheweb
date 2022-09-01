<script lang="ts">
	import '../app.css';

	import { BaseHead } from 'sveltecity';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<BaseHead faviconPath="/favicon.ico" />

<Header />

<main>
	<slot />
</main>

<Footer />
