<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<script lang='ts'>
	import Header from "$lib/Header/index.svelte"
</script>

<Header />
<main>
	<slot />
</main>

<footer>
	HyperRealtor.com 2021.
</footer>
