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

<details class="p-8 space-y-4 border border-gray-400 cursor-pointer">
	<summary class="flex justify-between items-center">
		<h3 class="text-3xl">{question}</h3>
		<svelte:component this={PlusIcon} />
	</summary>
	<p>{answer}</p>
</details>
