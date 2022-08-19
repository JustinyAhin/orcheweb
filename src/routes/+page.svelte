<script lang="ts">
	import Features from '$lib/components/Features.svelte';
	import FaQs from '$lib/components/FAQs.svelte';
</script>

<section class="bg-jungle-green">
	<div class="main-container">
		<div class="pt-16 pb-32 space-y-6">
			<h1 class="sm:w-10/12 text-light-cyan">
				We create finely crafted websites for coaches and consultants.
			</h1>
			<p class="text-2xl sm:w-8/12 text-light-cyan">
				For a fixed monthly fee, we create a <strong>custom website</strong> for you, based on your needs,
				that will help you build a successful online presence for your business.
			</p>

			<a href="#pricing" class="action-default bg-light-cyan text-jungle-green shadow-default"
				>Our Pricing</a
			>
		</div>
	</div>
</section>

<section class="py-16 pt-32 space-y-16 main-container" id="cases-studies">
	<h2 class="sm:w-9/12">Check a curated list of what we've been working on recently</h2>

	<div class="flex gap-8 flex-col sm:flex-row">
		<div class="shadow-xl bg-light-cyan flex flex-col">
			<div class="">
				<img
					src="https://assets.website-files.com/627d1f8706517a0c4426f5e1/627e8767c939f34ba668cb34_youtube-case-study-image-agencyst-webflow-ecommerce-template.png"
					alt=""
					class="rounded-t-2xl"
				/>
			</div>
			<div class="space-y-4 p-12 rounded-b-2xl">
				<h3 class="text-3xl hover:underline">
					<a href="/">How we rebuilt a custom website for Company Inc.</a>
				</h3>
				<p class="text-gray-700">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia blanditiis,
					minus animi dolore ducimus libero vero odit est, quibusdam iure consequuntur velit
					impedit. Dolorum non vitae fugit possimus inventore.
				</p>
			</div>
		</div>

		<div class="shadow-xl bg-light-cyan flex flex-col">
			<div class="">
				<img
					src="https://assets.website-files.com/627d1f8706517a0c4426f5e1/627e85a0037d531d46a6de23_facebook-case-study-image-agencyst-webflow-ecommerce-template.png"
					alt=""
					class="rounded-t-2xl"
				/>
			</div>
			<div class="space-y-4 p-12 rounded-b-2xl">
				<h3 class="text-3xl hover:underline">
					<a href="/">How we rebuilt a custom website for Company Inc.</a>
				</h3>
				<p class="text-gray-700">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita mollitia blanditiis,
					minus animi dolore ducimus libero vero odit est, quibusdam iure consequuntur velit
					impedit. Dolorum non vitae fugit possimus inventore.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="py-16 space-y-16 main-container" id="pricing">
	<div class="space-y-4">
		<h2>
			Unique pricing plan tailored to your needs for <span class="text-radical-red"
				>$2500 a month</span
			>
		</h2>

		<div class="sm:w-9/12 space-y-4">
			<p>
				We offer a <strong>unique pricing plan</strong> that covers our full range of services. This
				helps us properly define our value proposition, and help you know exactly what you're getting
				and what to expect.
			</p>
			<p>
				You can pause or cancel your subscription anytime. Read our <a
					href="#faqs"
					class="font-bold hover:underline text-radical-red">FAQs</a
				> for more details
			</p>
		</div>

		<a href="/" class="action-default text-light-cyan bg-jungle-green shadow-dark">Get Started</a>
	</div>

	<div class="space-y-8">
		<h3>What's included</h3>
		<Features />
	</div>
</section>

<section class="py-16 space-y-8 main-container" id="faq">
	<h2>FAQs</h2>

	<FaQs />

	<a href="/" class="action-default text-light-cyan bg-jungle-green shadow-dark">Get Started</a>
</section>

<svelte:head>
	<title>OrcheWeb</title>
	<meta
		name="description"
		content="Subscription-based web development services for coachs and consultants."
	/>
</svelte:head>
