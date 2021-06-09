<script lang="ts">
	export let logo
</script>

<div class="col-span-1 dark:bg-white rounded px-4 dark:px-2 dark:h-full dark:border dark:border-gray-100 dark:shadow flex justify-center md:col-span-2  lg:col-span-1">
	<a class="my-auto" href={logo.logoLink} target="_blank">
		<img src={logo.logoImageUrl}
					 class="h-16 object-contain object-center"
					 width={logo.logoWidth || 150}
					 height={logo.logoHeight || 150}
					 alt={logo.logoAlt}
		/>
	</a>
</div>
