<script lang="ts">
	import PlusIcon from '$lib/assets/icons/Plus.svelte';

	export let question: string;
	export let answer: string;
</script>

<details class="p-8 space-y-4 border border-gray-400 cursor-pointer">
	<summary class="flex justify-between items-center">
		<h3 class="text-3xl">{question}</h3>
		<svelte:component this={PlusIcon} />
	</summary>
	<p>{answer}</p>
</details>

<style>
	details[open] summary ~ * {
		animation: sweep 0.5s ease-in-out;
	}

	@keyframes sweep {
		0% {
			opacity: 0;
			margin-left: -10px;
		}
		100% {
			opacity: 1;
			margin-left: 0px;
		}
	}
</style>
