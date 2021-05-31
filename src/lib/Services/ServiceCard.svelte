<script lang='ts'>
	export let cardTitle;
	export let cardDescription;
</script>

<div class="pt-6">
	<div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
		<div class="-mt-6">
			<div>
                <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                  <!-- Heroicon name: outline/cloud-upload -->
                  <slot name='icon'/>
                </span>
			</div>
			<h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{cardTitle}</h3>
			<p class="mt-5 text-base text-gray-500">
				{cardDescription}
			</p>
		</div>
	</div>
</div>
