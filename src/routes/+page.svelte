<script lang="ts">
	import { Head } from 'sveltecity';

	import SingleCaseStudy from '$lib/components/SingleCaseStudy.svelte';
	import Features from '$lib/components/Features.svelte';
	import FaQs from '$lib/components/FAQs.svelte';
</script>

<Head
	isHome
	siteName="OrcheWeb"
	siteSlogan="Unlimited Custom Web Development"
	pageTitle="OrcheWeb"
	pageDescription="A unique fixed monthly subscription service to cover all your web development needs. No hidden fees. Cancel anytime."
	ogImagePath="https://res.cloudinary.com/orcheweb/image/upload/v1661458534/orcheweb/orcheweb-og-image_ijhxub.png"
	faviconPath="/favicon.icon"
/>

<section class="bg-jungle-green">
	<div class="main-container">
		<div class="pt-16 pb-32 space-y-6">
			<h1 class="sm:w-10/12 text-light-cyan">
				Get your website done with less headache and more success.
			</h1>
			<p class="text-2xl sm:w-8/12 text-light-cyan">
				A unique fixed monthly subscription service to cover all your web development needs.
			</p>
			<p class="text-xl font-bold opacity-75 sm:w-8/12 text-light-cyan">
				No surprises, no hidden fees. Cancel anytime.
			</p>

			<a href="#pricing" class="action-default bg-light-cyan text-jungle-green shadow-default"
				>See Pricing</a
			>
		</div>
	</div>
</section>

<section class="py-16 pt-32 space-y-16 main-container" id="cases-studies">
	<h2>Take a loot at what we've been working on recently</h2>

	<div>
		<SingleCaseStudy
			title="How we rebuilt a new web experience for Nerdy Joe"
			url="https://www.nerdyjoe.com"
			coverUrl="https://res.cloudinary.com/orcheweb/image/upload/v1662038112/orcheweb/nerdy-joe-hero-screenshot_rkrhx3.webp"
			coverAlt="Nerdy Joe hero screenshot"
		>
			<svelte:fragment slot="description">
				<p>
					Nerdy Joe is a email marketing company that specializes in creating high-quality email
					copy for businesses. We have worked with them to create a brand new website that reflects
					the company's new brand and converts more customers.
				</p>
			</svelte:fragment>
		</SingleCaseStudy>
	</div>
</section>

<section class="py-16 space-y-16 main-container" id="pricing">
	<div class="space-y-4">
		<h2>
			Unique pricing plan at <span class="text-ruby-red">$3500/month</span>
		</h2>

		<div class="space-y-4 sm:w-9/12">
			<p>
				We offer a <strong>unique pricing plan</strong> that covers our full range of services. You don't
				need to struggle deciding which plan to choose, and you know exactly what you will get.
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
					I've worked with several devs in the past, and Justin is by far the best. He passionately
					took on my project from start to end within the deadline and even went extra mile to do
					things that were not on the scope of work.
				</p>
				<p class="text-2xl">
					The website he built for me is 10x faster than what I had, responsive on all front, and
					flawless SEO-wise. He regularly helps me keep the site performing and I strongly recommend
					him.
				</p>
				<div class="space-y-1">
					<h3>Ernest Bio Bogore</h3>
					<p class="text-2xl font-bold text-gray-600">Head of Email at Company Nerdy Joe</p>
				</div>
			</div>
		</div>
	</div>
</section>
