<script lang="ts">
	import Header from '$lib/Header/index.svelte';
</script>
<style lang="postcss" global>
    /* only apply purgecss on utilities, per Tailwind docs */
    /* purgecss start ignore */
    @tailwind base;
    @tailwind components;
    /* purgecss end ignore */
    @tailwind utilities;
</style>

<main>
	<slot />
</main>

<footer>

</footer>
