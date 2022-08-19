<script lang="ts">
	export let imageUrl: string;
	export let title: string;
	export let url: string;
	export let abstract: string;
</script>

<div class="flex flex-col shadow-xl bg-light-cyan">
	<div class="">
		<img src={imageUrl} alt="" class="rounded-t-2xl" />
	</div>
	<div class="p-12 space-y-4 rounded-b-2xl">
		<h3 class="text-3xl hover:underline">
			<a href={url}>{title}</a>
		</h3>
		<p class="text-gray-700">{abstract}</p>
	</div>
</div>
