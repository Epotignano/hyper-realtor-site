<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<script lang='ts'>
	import Header from "$lib/Header/index.svelte"
	import Footer from "$lib/Footer/index.svelte"
</script>

<Header />
<main>
	<slot />
</main>
<Footer/>
