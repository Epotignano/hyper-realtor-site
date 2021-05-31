<script lang="ts">
    import Testimonial from "./Testimonial.svelte";

    export let testimonials;
</script>

<div>
    {#each testimonials as testimonial}
        <div class="p-2 md:px-8">
            <Testimonial testimonial={testimonial} />
        </div>
    {/each}
</div>