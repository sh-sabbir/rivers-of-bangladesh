<script setup>
import { ref, watch } from "vue";

let query = ref("");
let rivers = { path: "/database" };

watch(
	query,
	() => {
		let filtered;
		if (query !== "") {
			filtered = {
				path: "/database",
				where: [{ title: { $regex: `/${query.value}/ig` } }],
			};
		} else {
			filtered = { path: "/database" };
		}

		rivers = filtered;
	},
	{ immediate: false }
);
</script>

<template>
	<main>
		<section class="bg-[#0077B6]">
			<div
				class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-96 lg:items-center"
			>
				<div class="mx-auto max-w-2xl text-center w-full">
					<h1 class="font-bold text-white text-6xl leading-0 -mb-2">
						Search in the database!
					</h1>
					<div class="relative">
						<div
							class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
						>
							<svg
								class="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</div>
						<input
							type="search"
							id="default-search"
							class="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border-gray-300 focus:ring-[#0077B6] focus:border-[#0077B6]"
							placeholder="Search rivers..."
							v-model="query"
						/>
					</div>
				</div>
			</div>
		</section>
		<AlphabetIndex />
		<div class="container mx-auto my-20 max-w-3xl">
			<ContentList :query="rivers">
				<template #default="{ list }">
					<div v-for="article in list" :key="article._path">
						<template v-if="article._dir === 'database'">
							<div class="mx-auto max-w-3xl text-center mb-12">
								<h2
									class="text-3xl font-bold text-gray-900 sm:text-4xl"
								>
									{{ article.title }}
								</h2>

								<p class="mt-4 text-gray-500 sm:text-xl">
									{{ article.description }}
								</p>
							</div>
						</template>

						<template v-else>
							<article
								class="rounded-xl border-2 border-gray-100 bg-white mb-5"
							>
								<div class="flex items-start gap-4 px-6 py-4">
									<div>
										<h3 class="font-medium sm:text-lg">
											{{ article.title }} -
											{{ article.title_bn }}
										</h3>

										<p
											class="line-clamp-2 text-sm text-gray-700"
										>
											{{ article.description }}
										</p>

										<div
											class="mt-2 sm:flex sm:items-center sm:gap-2"
										>
											<div
												class="flex items-center gap-1 text-gray-500"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-4 w-4"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="2"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
													/>
												</svg>

												<p class="text-xs">
													14 comments
												</p>
											</div>
										</div>
									</div>
								</div>
							</article>
						</template>
					</div>
				</template>
				<template #not-found>
					<div class="grid px-4 bg-white place-content-center">
						<div class="text-center">
							<h2
								class="font-black text-gray-200 text-6xl leading-0"
							>
								No results
							</h2>

							<p
								class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
							>
								Uh-oh!
							</p>

							<p class="mt-4 text-gray-500">
								No river found for your search query <br />try
								something different!
							</p>
						</div>
					</div>
				</template>
			</ContentList>
		</div>
	</main>
</template>
