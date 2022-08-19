<script lang="ts">
	import SingleFeature from '$lib/components/SingleFeature.svelte';

	import CodeIcon from '$lib/assets/icons/Code.svelte';
	import CashIcon from '$lib/assets/icons/Cash.svelte';
	import PencilIcon from '$lib/assets/icons/Pencil.svelte';
	import AdjustmentsIcon from '$lib/assets/icons/Adjustments.svelte';
	import LightningIcon from '$lib/assets/icons/Lightning.svelte';
</script>

<div class="grid sm:grid-cols-2 gap-8">
	<SingleFeature
		iconReference={CodeIcon}
		title="Custom website development"
		description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse neque expedita molestias praesentium iste accusantium tenetur? In, aliquid? Impedit nobis tempore unde architecto iusto quidem, debitis mollitia a non iure totam! Perspiciatis, temporibus accusantium."
	/>

	<SingleFeature
		iconReference={CodeIcon}
		title="SEO Optimization"
		description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse neque expedita molestias praesentium iste accusantium tenetur? In, aliquid? Impedit nobis tempore unde architecto iusto quidem, debitis mollitia a non iure totam! Perspiciatis, temporibus accusantium."
	/>

	<SingleFeature
		iconReference={LightningIcon}
		title="Performance by default"
		description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse neque expedita molestias praesentium iste accusantium tenetur? In, aliquid? Impedit nobis tempore unde architecto iusto quidem, debitis mollitia a non iure totam! Perspiciatis, temporibus accusantium."
	/>

	<SingleFeature
		iconReference={PencilIcon}
		title="Unlimited free revisions"
		description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse neque expedita molestias praesentium iste accusantium tenetur? In, aliquid? Impedit nobis tempore unde architecto iusto quidem, debitis mollitia a non iure totam! Perspiciatis, temporibus accusantium."
	/>

	<SingleFeature
		iconReference={CashIcon}
		title="Fixed and predictable fee"
		description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse neque expedita molestias praesentium iste accusantium tenetur? In, aliquid? Impedit nobis tempore unde architecto iusto quidem, debitis mollitia a non iure totam! Perspiciatis, temporibus accusantium."
	/>

	<SingleFeature
		iconReference={AdjustmentsIcon}
		title="Custom integrations"
		description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse neque expedita molestias praesentium iste accusantium tenetur? In, aliquid? Impedit nobis tempore unde architecto iusto quidem, debitis mollitia a non iure totam! Perspiciatis, temporibus accusantium."
	/>
</div>
