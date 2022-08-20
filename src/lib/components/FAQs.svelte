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
			<p>
				You can check some cases studies of projects we've worked on <a href="/" class="default">here</a> and
				<a href="/" class="default">here</a>
				to get an idea of what you can expect from us.
			</p>
		</svelte:fragment>
	</FaqItem>
</div>
