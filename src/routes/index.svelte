<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter/index.svelte';
	import Hero from '$lib/Hero/index.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Hero heroTitle="Emiliano hero"/>
	<div class="text-base text-blue-600 bg-blue-200 py-8">
		<a href="/articles">Articles</a>
	</div>
</section>
