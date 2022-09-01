<script lang="ts">
	export let title: string;
	export let url: string;

	export let coverUrl: string;
	export let coverAlt: string;
</script>

<div class="shadow-xl bg-light-cyan flex-col md:flex-row flex">
	<div>
		<img src={coverUrl} alt={coverAlt} class="h-full w-auto" />
	</div>
	<div class="space-y-4 p-8 sm:p-12 basis-6/12">
		<h3 class="text-2xl sm:text-3xl">{title}</h3>
		<slot name="description" />
		<a href={url} class="flex text-lg font-bold default" target="_blank"
			>Check the website here &#8599;</a
		>
	</div>
</div>
