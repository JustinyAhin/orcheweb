<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let iconReference: ComponentType;
	export let title: string;
	export let description: string;
</script>

<div class="space-y-2 border border-gray-400 p-8 feature">
	<svelte:component this={iconReference} />

	<h4 class="text-3xl">{title}</h4>
	<p class="text-lg text-gray-600">{description}</p>
</div>
