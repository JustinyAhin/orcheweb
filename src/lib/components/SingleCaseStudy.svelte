<script lang="ts">
	export let title: string;
	export let url: string;
</script>

<div class="p-8 space-y-4 rounded-2xl shadow-xl sm:p-12 bg-light-cyan">
	<h3 class="text-2xl sm:text-3xl">{title}</h3>
	<slot name="description" />
	<a href={url} class="flex text-lg font-bold default" target="_blank"
		>Check the website here &#8599;</a
	>
</div>
