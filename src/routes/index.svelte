<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Hero from '$lib/Hero/index.svelte';
	import Testimonials from '$lib/Testimonials/index.svelte';
	import ProblemGrid from '$lib/ProblemGrid/index.svelte';
	import Stats from '$lib/Stats/index.svelte';
	import Services from '$lib/Services/index.svelte';
	import LogoCloud from '$lib/LogoCloud/index.svelte';
	import SvelteSeo from "svelte-seo"

	const testimonials = [
		{
			quoteTitle: "Hello testimonial",
			quote: "quote",
			authorAvatarUrl: "https://images.prismic.io/hyperrealtor/66c47521-12d9-48d3-9bca-252e21122e35_AntonioJimenez.jpeg?auto=compress,format",
			authorName: "authorName",
			authorLocation: "authorLocation",
			companyName: "Company Name"
		}
	]
</script>

<SvelteSeo title='HyperRealtor | Marketing Real Estate Success'/>

<section>
	<Hero
		description="We help Real Estate Developers and Teams to implement Cutting-edge Marketing Strategies to drive more profit."
	>
		<h1
			slot="title"
			class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
		>
			<span class="block xl:inline">Marketing for </span>
			<span class="block text-purple-600 xl:inline">Real Estate Success</span>
		</h1>
	</Hero>
	<section>
		<ProblemGrid/>
	</section>
	<section>
		<Services/>
	</section>
	<section>
		<Stats/>
	</section>
	<section>
		<LogoCloud />
	</section>
	<section>
		<Testimonials
			testimonials={testimonials}
			}
		/>
	</section>

</section>
