<script lang="ts">
	import { onMount } from 'svelte';
	import PlusIcon from '$lib/assets/icons/Plus.svelte';

	export let question: string;
	export let answer: string;

	onMount(() => {
		// Open the first FAQ item on page
		const faqItems = document.querySelectorAll('details');
		faqItems[0].open = true;
	});
</script>

<details class="space-y-4 border border-gray-400 p-8 cursor-pointer">
	<summary class="flex items-center justify-between">
		<h3 class="text-3xl">{question}</h3>
		<svelte:component this={PlusIcon} />
	</summary>
	<p>{answer}</p>
</details>
