<template>
	<main>
		<AlphabetIndex />
		<div class="container mx-auto my-20 max-w-3xl">
			<ContentList :path="`/database`" v-slot="{ list }">
				<div v-for="article in list" :key="article._path">
					<template v-if="article._dir === 'database'">
						<div class="mx-auto max-w-3xl text-center mb-12">
							<h2
								class="text-3xl font-bold text-gray-900 sm:text-4xl"
							>
								{{ article.title }}
							</h2>

							<p class="mt-4 text-gray-500 sm:text-xl">
								All rivers starting with "{{ article.title }}"
							</p>
						</div>
					</template>

					<template v-else>
						<article
							class="rounded-xl border-2 border-gray-100 bg-white mb-5"
						>
							<div
								class="flex items-start gap-4 px-6 py-4"
							>
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

											<p class="text-xs">14 comments</p>
										</div>
									</div>
								</div>
							</div>
						</article>
					</template>
				</div>
			</ContentList>
		</div>
	</main>
</template>
