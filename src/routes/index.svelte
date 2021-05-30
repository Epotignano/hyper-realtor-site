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
</section>
