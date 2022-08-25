<script lang="ts">
	import PlusIcon from '$lib/assets/icons/Plus.svelte';
</script>

<details class="p-4 space-y-4 border border-gray-400 cursor-pointer">
	<summary class="flex gap-2 justify-between items-center list-none">
		<h3 class="text-xl sm:text-2xl">
			<slot name="question" />
		</h3>
		<svelte:component this={PlusIcon} />
	</summary>
	<div class="space-y-2 answer">
		<slot name="answer" />
	</div>
</details>

<style>
	.answer :global(p) {
		@apply text-lg text-gray-600;
	}
</style>
