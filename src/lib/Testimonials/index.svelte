<script lang="ts">
    import Testimonial from "./Testimonial.svelte";
    export let testimonials;
</script>

<div class='max-w-full mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8'>
    {#each testimonials as testimonial}
        <div class="p-2 md:px-8">
            <Testimonial testimonial={testimonial} />
        </div>
    {/each}
</div>
