<script lang="ts">
  import CTA from '../CTA.svelte';
    export let heroTitle;
    export let description;
    export let imageUrl;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gray-50">
  <main class="lg:relative">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        {#if heroTitle}
           <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            {heroTitle}
          </h1>
        {/if}
        <slot name="title"/>
        {#if description}
          <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            {description}
          </p>
        {/if}

          <div class="rounded-md shadow">
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <CTA/>
          </div>
        </div>
      </div>
    </div>
    {#if imageUrl }
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src={imageUrl} alt="">
      </div>
    {/if}
  </main>
</div>
