<script setup>
const entries = [
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
];

let counts = [];

onBeforeMount(() => {
	entries.forEach(async function (letter) {
		const count = await queryContent(
			`/database/${letter.toLowerCase()}`
		).count();
		counts[letter] = count;
	});
});
</script>

<template>
	<nav class="bg-gray-800">
		<div class="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
			<div class="relative flex h-auto items-center justify-between">
				<div class="flex flex-wrap">
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
					<div
						v-for="path in entries"
						:key="path"
						class="w-[90px] inline-flex flex-shrink-0 flex-grow-0"
					>
						<NuxtLink
							:to="`/database/${path.toLowerCase()}`"
							class="text-gray-300 text-center hover:bg-gray-700 hover:text-white w-full rounded-md px-3 py-2 text-sm font-medium"
							>{{ path }} ({{
								counts[path] > 0 ? counts[path] - 1 : 0
							}})</NuxtLink
						>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
