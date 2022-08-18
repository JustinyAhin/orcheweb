<script lang="ts">
	import Check from '$lib/assets/Check.svelte';
</script>

<section class="bg-jungle-green min-h-[70vh]">
	<div class="mx-auto max-w-7xl">
		<header class="py-8">
			<a href="/" class="text-2xl font-bold underline text-light-cyan">OrcheWeb</a>
		</header>

		<div class="pt-20 pb-32 space-y-6">
			<h1 class="w-10/12 text-light-cyan">
				We create finely crafted websites for coaches and consultants.
			</h1>
			<p class="w-8/12 text-2xl text-light-cyan">
				For a fixed monthly fee, we create a <strong>custom website</strong> for you, based on your needs,
				that will help you build a successful online presence for your business.
			</p>

			<a
				href="#pricing"
				class="flex py-4 px-6 text-xl font-bold bg-light-cyan text-jungle-green w-fit shadow-default"
				>Our Pricing</a
			>
		</div>
	</div>
</section>

<section class="py-32 mx-auto space-y-8 max-w-7xl" id="pricing">
	<div class="space-y-4">
		<h2 class="w-9/12">
			Unique pricing plan tailored to your needs for <span class="text-radical-red"
				>$2500 a month</span
			>
		</h2>
		<p class="w-8/12">
			We offer a <strong>unique pricing plan</strong> that covers our full range of services. This helps
			us properly define our value proposition, and help you know exactly what you're getting and what
			to expect.
		</p>
	</div>

	<div class="space-y-4">
		<h3>What's included</h3>
		<hr class="text-gray-400" />
	</div>

	<div class="grid grid-cols-2 gap-8">
		<div class="space-y-4">
			<h4>Website development</h4>
			<ul>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
				</li>
			</ul>
		</div>

		<div class="space-y-4">
			<h4>Custom integrations</h4>
			<ul>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
				</li>
			</ul>
		</div>

		<div class="space-y-4">
			<h4>SEO Optimizations</h4>
			<ul>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
				</li>
			</ul>
		</div>

		<div class="space-y-4">
			<h4>SEO Optimizations</h4>
			<ul>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
				</li>
				<li>
					<svelte:component this={Check} />
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
				</li>
			</ul>
		</div>
	</div>
</section>

<svelte:head>
	<title>OrcheWeb</title>
	<meta
		name="description"
		content="Subscription-based web development services for coachs and consultants."
	/>
</svelte:head>

<style>
	li {
		@apply flex gap-2 items-center;
	}

	ul {
		@apply space-y-1;
	}

	ul p {
		@apply text-base;
	}
</style>
