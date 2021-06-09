<script lang="ts">
	import LogoComponent from './LogoComponent.svelte';
	export let logos;
</script>


<div>
	<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
		<div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
			{#if logos && logos.length}
				{#each logos as logo}
					<LogoComponent logo={logo} />
				{/each}
			{/if}
		</div>
	</div>
</div>
