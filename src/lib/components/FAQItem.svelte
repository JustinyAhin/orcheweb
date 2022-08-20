<script lang="ts">
	import PlusIcon from '$lib/assets/icons/Plus.svelte';
</script>

<details class="p-8 space-y-4 border border-gray-400 cursor-pointer">
	<summary class="flex justify-between items-center gap-2">
		<h3 class="text-2xl sm:text-3xl">
			<slot name="question" />
		</h3>
		<svelte:component this={PlusIcon} />
	</summary>
	<div class="answer space-y-2">
		<slot name="answer" />
	</div>
</details>

<style>
	.answer :global(p) {
		@apply text-lg text-gray-600;
	}
</style>
