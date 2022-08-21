<script lang="ts">
	import Head from '$lib/components/Head.svelte';

	import SingleCaseStudy from '$lib/components/SingleCaseStudy.svelte';
	import Features from '$lib/components/Features.svelte';
	import FaQs from '$lib/components/FAQs.svelte';
</script>

<section class="bg-jungle-green">
	<div class="main-container">
		<div class="pt-16 pb-32 space-y-6">
			<h1 class="sm:w-10/12 text-light-cyan">
				We create finely crafted websites for coaches and consulting businesses.
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
	<h2>Check a curated list of what we've been working on recently</h2>

	<SingleCaseStudy
		title="How we rebuilt a new web experience for Nerdy Joe"
		url="https://www.nerdyjoe.com"
	>
		<svelte:fragment slot="description">
			<p>
				Nerdy Joe is a email marketing company that specializes in creating high-quality email copy
				for businesses. We have worked with them to create a brand new website that reflects the
				company's new brand.
			</p>
		</svelte:fragment>
	</SingleCaseStudy>
</section>

<section class="py-16 space-y-16 main-container" id="pricing">
	<div class="space-y-4">
		<h2>
			Unique pricing plan tailored to your needs for <span class="text-radical-red"
				>$1000 a month</span
			>
		</h2>

		<div class="space-y-4 sm:w-9/12">
			<p>
				We offer a <strong>unique pricing plan</strong> that covers our full range of services. This
				helps us properly define our value proposition, and help you know exactly what you're getting
				and what to expect.
			</p>
			<p>
				You can pause or cancel your subscription anytime. Read our <a href="#faqs" class="default"
					>FAQs</a
				> for more details
			</p>
		</div>

		<a
			href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-24G80527LX011272TMMBB3EY"
			class="action-default text-light-cyan bg-jungle-green shadow-dark"
			target="_blank">Get Started</a
		>
	</div>

	<div class="space-y-8">
		<h3>What's included</h3>
		<Features />
	</div>
</section>

<section class="py-16 space-y-8 main-container" id="faqs">
	<h2>FAQs</h2>

	<FaQs />

	<a
		href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-24G80527LX011272TMMBB3EY"
		class="action-default text-light-cyan bg-jungle-green shadow-dark"
		target="_blank">Get Started</a
	>
</section>

<section class="py-32 bg-light-cyan text-jungle-green" id="textimonials">
	<div class="space-y-16 main-container">
		<h2 class="sm:w-9/12">Don't just take our word for it. See what our customers say</h2>

		<div class="flex flex-col bg-white sm:flex-row shadow-m">
			<div class="basis-6/12">
				<img
					src="https://res.cloudinary.com/orcheweb/image/upload/w_600/v1661013284/orcheweb/portrait-ernest-bio-bogore_zyvnsm.webp"
					alt="Ernest Bio Bogore portrait"
					height="600"
					width="600"
				/>
			</div>
			<div class="flex flex-col gap-8 justify-center p-8 sm:p-16 basis-6/12">
				<p class="text-2xl">
					I had the opportunity to work with Justin on a project and boy was I impressed.
				</p>
				<p class="text-2xl">
					Justin is very professional and transparent in his work. He even went beyond the scope of
					work and did stuff that he thought could benefit me.
				</p>
				<div class="space-y-1">
					<h3>Ernest Bio Bogore</h3>
					<p class="text-2xl font-bold text-gray-600">Head of Email at Company Nerdy Joe</p>
				</div>
			</div>
		</div>
	</div>
</section>

<svelte:head>
	<Head isHome />
</svelte:head>
