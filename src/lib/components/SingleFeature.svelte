<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let iconReference: ComponentType;
	export let title: string;
</script>

<div class="p-8 space-y-2 border border-gray-400 feature">
	<svelte:component this={iconReference} />

	<h4 class="text-3xl">{title}</h4>
	<div class="description space-y-2">
		<slot name="description" />
	</div>
</div>

<style>
	.description :global(p) {
		@apply text-lg text-gray-600;
	}
</style>
