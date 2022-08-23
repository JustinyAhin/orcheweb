<script lang="ts">
	import SingleFeature from '$lib/components/SingleFeature.svelte';

	import CodeIcon from '$lib/assets/icons/Code.svelte';
	import CashIcon from '$lib/assets/icons/Cash.svelte';
	import PencilIcon from '$lib/assets/icons/Pencil.svelte';
	import AdjustmentsIcon from '$lib/assets/icons/Adjustments.svelte';
	import LightningIcon from '$lib/assets/icons/Lightning.svelte';
</script>

<div class="grid gap-8 sm:grid-cols-2">
	<SingleFeature iconReference={CodeIcon} title="Custom website development">
		<svelte:fragment slot="description">
			<p>
				We believe that every website is unique and we want to make sure that yours is as well.
				Solutions that are custom tailored to your needs are the best way to deliver a proper
				experience to your users and customers.
			</p>
			<p>
				We specialize in static websites solutions coupled with custom integrations, headless CMS
				and more.
			</p>
		</svelte:fragment>
	</SingleFeature>

	<SingleFeature iconReference={CodeIcon} title="SEO Optimization">
		<svelte:fragment slot="description">
			<p>
				Every website we create is optimized for search engines. You get things like a well
				structured website, proper meta tags and schema implementation, best practices for search
				engine optimization out of the box, and without having to pay for any extra services.
			</p>
			<p>
				<a href="/about" class="default">Our founder</a> has worked for several years at the leading
				SEO company in the WordPress space, and he will work on making your website as good as possible
				for search engines.
			</p>
		</svelte:fragment>
	</SingleFeature>

	<SingleFeature iconReference={LightningIcon} title="Performance by default">
		<svelte:fragment slot="description">
			<p>
				We believe that every website should be as fast as possible. Users and customers should be
				able to experience the best possible experience when navigation through your website. That's
				why we take very seriously the performance of the websites we create.
			</p>
			<p>And we will make sure that your website is not the exception to this rule.</p>
		</svelte:fragment>
	</SingleFeature>

	<SingleFeature iconReference={PencilIcon} title="Unlimited free revisions">
		<svelte:fragment slot="description">
			<p>
				Once you subscribe to our plan, you can request as many edits on the project as you want.
				Your requests will be applied one at a time, until you are happy with the result.
			</p>
			<p>
				Read more about that in our <a href="/#faqs" class="default">FAQs below.</a>
			</p>
		</svelte:fragment>
		/>
	</SingleFeature>

	<SingleFeature iconReference={CashIcon} title="Fixed and predictable fee">
		<svelte:fragment slot="description">
			<p>
				We charge a fixed fee for each project. This fee is always the same every month, regardless
				of the project size, type of service or the number of revisions you request, as long as the
				project is in the scope of our services.
			</p>
			<p>
				Read more about that in our <a href="/#faqs" class="default">FAQs below.</a>
			</p>
		</svelte:fragment>
	</SingleFeature>

	<SingleFeature iconReference={AdjustmentsIcon} title="Custom integrations">
		<svelte:fragment slot="description">
			<p>
				Do you want to integrate your website with a third-party service? Maybe a newsletter, or a
				payment gateway? Or you want to host your content in a headless CMS?
			</p>
			<p>
				These are the things that we can do for you. We will help you with the integration of your
				website with the third-party service you need, without extra charges.
			</p>
		</svelte:fragment>
	</SingleFeature>
</div>
