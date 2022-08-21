<script lang="ts">
	import { onMount } from 'svelte';
	import FaqItem from '$lib/components/FAQItem.svelte';

	onMount(() => {
		// Open the first FAQ item on page
		const faqItems = document.querySelectorAll('details');
		faqItems[0].open = true;

		// Close all other FAQ items when one is clicked
		faqItems.forEach((faqItem) => {
			faqItem.addEventListener('click', () => {
				const otherFaqItems = Array.from(faqItems).filter((item) => item !== faqItem);

				otherFaqItems.forEach((item) => {
					if (item.open) {
						item.open = false;
					}
				});
			});
		});
	});
</script>

<div class="space-y-8">
	<FaqItem>
		<svelte:fragment slot="question">How "unlimited" is our plan?</svelte:fragment>
		<svelte:fragment slot="answer">
			<p>
				We offer an "unlimited" plan that allows you to request as many edits as you want. Your
				requests will be applied one at a time, until you are happy with the result.
			</p>
			<p>That means we will complete the next request as soon as the previous one is complete.</p>
			<p>
				A request can be things like updating a content on a page, adding a new page, integrating a
				chatbot, adding a new feature, or a payment integration.
			</p>
		</svelte:fragment>
	</FaqItem>

	<FaqItem>
		<svelte:fragment slot="question"
			>How do I know that your services are a good fit for my needs?</svelte:fragment
		>
		<svelte:fragment slot="answer">
			<p>
				We advertised ourselves as a service for coaches and consulting businesses. That's because
				over the years, we've worked on several projects within this niche, and created some
				patterns and best practises that we can apply to your project. If you fall into this
				category, our services are a good fit for you.
			</p>
			<p>
				If you've also experienced having to pay enormous amounts for things like adding a
				newsletter to a website, our subscription service will definitely be something you will
				like.
			</p>
		</svelte:fragment>
	</FaqItem>

	<FaqItem>
		<svelte:fragment slot="question">Will you also design my website?</svelte:fragment>
		<svelte:fragment slot="answer">
			<p>
				We do not provide UI design services. That means that in most cases, you will have to come
				with your own design that we will implement.
			</p>
			<p>
				However, we can discuss about this if you haven't thought about it yet, an we will be happy
				to recommend to you some excellent UI designers we have been working with.
			</p>
		</svelte:fragment>
	</FaqItem>

	<FaqItem>
		<svelte:fragment slot="question">Who will I be working with?</svelte:fragment>
		<svelte:fragment slot="answer">
			<p>
				OrcheWeb is solely run by me, <a href="https://segbedji.com" class="default"
					>Justin Ahinon</a
				>. You can read more about myself and my background on the
				<a href="/about" class="default">about page</a>.
			</p>
		</svelte:fragment>
	</FaqItem>

	<FaqItem>
		<svelte:fragment slot="question">What tech stack do you use?</svelte:fragment>
		<svelte:fragment slot="answer">
			<p>
				Our tech stack really depends on the type of website you are looking to build, its size, and
				other specific requirements you might have.
			</p>

			<p>
				Check out our <a href="/stacks" class="default">tech stacks page</a> to see what we use and why.
			</p>
		</svelte:fragment>
	</FaqItem>

	<FaqItem>
		<svelte:fragment slot="question"
			>What happens when I click on the "Get started" button?</svelte:fragment
		>
		<svelte:fragment slot="answer">
			<p>
				You will be redirected to a page where you can proceed to the payment. You'll get right
				after an email with a link to join our project management system where you can start adding
				more details about your project, as well as your requests.
			</p>
			<p>
				We will reach out to you by email <strong>in the next 12 hours</strong> following your payment
				to confirm your subscription.
			</p>
		</svelte:fragment>
	</FaqItem>

	<FaqItem>
		<svelte:fragment slot="question">How can I pay for the subscription?</svelte:fragment>
		<svelte:fragment slot="answer">
			<p>
				At the moment, we accept payments through PayPal. You will need to have a PayPal account in order
				to be able to pay. We plan to expand that to other payments systems like Stripe soon.
			</p>
		</svelte:fragment>
	</FaqItem>
</div>
