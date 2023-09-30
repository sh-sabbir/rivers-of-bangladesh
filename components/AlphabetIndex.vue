<script>
export default {
	data() {
		return {
			entries: [
				"A",
				"B",
				"C",
				"D",
				"E",
				"F",
				"G",
				"H",
				"I",
				"J",
				"K",
				"L",
				"M",
				"N",
				"O",
				"P",
				"Q",
				"R",
				"S",
				"T",
				"U",
				"V",
				"W",
				"X",
				"Y",
				"Z",
			],
		};
	},
};
</script>

<template>
	<nav class="bg-gray-800">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex h-16 items-center justify-between">
				<div class="flex space-x-4">
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
					<div v-for="path in entries" :key="path">
						<NuxtLink
							:to="`/database/${path.toLowerCase()}`"
							class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
							>{{ path }}</NuxtLink
						>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
