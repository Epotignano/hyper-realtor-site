<script>
	import ServiceCard from './ServiceCard.svelte';
    export let services;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white py-16 sm:py-24 lg:py-32">
	<div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
		<h2 class="text-base font-semibold tracking-wider text-indigo-600 uppercase">Grow faster</h2>
		<p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
			Everything you need to thrive
		</p>
		<p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
			Get Growth Marketing Strategies for Real Estate and be the number one in your market
		</p>
		<div class="mt-12">
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<ServiceCard cardTitle='Growth Strategy' cardDescription='Define clear growth goals and develop an actionable, proven strategy to meet them'>
					<svg slot='icon' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
					</svg>
				</ServiceCard>
				<ServiceCard cardTitle='Lead Generation' cardDescription='Close more clients using hyper-targeted prospecting strategies and proven sales system.'>
					<svg slot="icon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
				</ServiceCard>
				<ServiceCard cardTitle='Email and SMS Marketing' cardDescription='We increase trust, loyalty, and new sales with personalized, conversion-driven marketing.'>
					<svg slot='icon' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
				</ServiceCard>
				<ServiceCard cardTitle='Paid Acquisition' cardDescription='Leverage paid digital advertising platforms like Facebook and Google to scale faster.'>
					<svg slot='icon' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</ServiceCard>
				<ServiceCard cardTitle='Marketing Funnel Optimization' cardDescription="We identify and test the best opportunities for maximizing your company's ROI.">
					<svg slot='icon' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
					</svg>
				</ServiceCard>
				<ServiceCard cardTitle='Sales Funnel Optimization' cardDescription="We implement CRM Automation and custom sales reports to identify and the best opportunities for maximizing your company's ROI.">
					<svg slot='icon' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
					</svg>
				</ServiceCard>
			</div>
		</div>
	</div>
</div>
