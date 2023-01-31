<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	{#if import.meta.env.PROD}
		<!-- Pirsch Analytics -->
		<script
			defer
			type="text/javascript"
			src="https://api.pirsch.io/pirsch.js"
			id="pirschjs"
			data-code="E5MvxPstzAhl6udlESppDo72Bn8o3iSk"></script>
	{/if}
</svelte:head>

<slot />
