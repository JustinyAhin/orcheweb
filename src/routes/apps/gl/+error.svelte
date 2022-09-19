<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="space-y-4">
    <div>
        <span class="text-5xl font-bold">{$page.status}</span>
        <h1 class="text-ruby-red">{$page.error?.message}</h1>
    </div>

    <a href="/" class="flex text-ruby-red font-bold hover:underline">Return to homepage</a>
</section>
