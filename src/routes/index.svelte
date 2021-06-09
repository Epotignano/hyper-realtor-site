<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Hero from '$lib/Hero/index.svelte';
	import Testimonials from '$lib/Testimonials/index.svelte';
	import ProblemGrid from '$lib/ProblemGrid/index.svelte';
	import Stats from '$lib/Stats/index.svelte';
	import Plan from '$lib/Plan/index.svelte';
	import Services from '$lib/Services/index.svelte';
	import LogoCloud from '$lib/LogoCloud/index.svelte';
	import SvelteSeo from "svelte-seo"
	import { Logos } from '../data/logos';
	import { TestimonialsDataEn } from '../data/testimonials';


</script>

<SvelteSeo
	title='HyperRealtor | Marketing Real Estate Success'/>
<svelte:head>
	<html lang="es-ES" />
</svelte:head>

<section>
	<Hero
		description="We help Real Estate Developers and Teams to implement Cutting-edge Marketing Strategies to drive more profit."
		imageUrl="https://images.prismic.io/hyperrealtor/1962dcca-844b-4119-ab09-16e6868ac074_Webp.net-resizeimage+%282%29.jpg?auto=compress,format"
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
		<LogoCloud logos={Logos} />
	</section>
	<section>
		<Plan/>
	</section>

	<section>
		<Testimonials
			testimonials={TestimonialsDataEn}
			}
		/>
	</section>

</section>
