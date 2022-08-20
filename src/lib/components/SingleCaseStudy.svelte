<script lang="ts">
	export let title: string;
	export let url: string;
</script>

<div class="bg-light-cyan p-8 space-y-4 rounded-2xl sm:p-12 shadow-xl">
	<h3 class="text-2xl sm:text-3xl">{title}</h3>
	<slot name="description" />
	<a href={url} class="default flex font-bold text-lg">Read more about the project &rarr;</a>
</div>
