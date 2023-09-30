<template>
	<HeroBanner />

	<section class="bg-white">
		<div
			class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
		>
			<h2
				class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
			>
				We have listed
				<span class="underline decoration-wavy text-[#0077B6]">500</span> rivers till
				now!
			</h2>

			<div class="mt-8 mx-auto max-w-3xl text-center">
				<p class="mt-4 text-gray-700">
					Welcome to the first complete database on Rivers of
					Bangladesh. Geographically Bangladesh is a South Asian
					country which have a enrich river network. This large water
					bodies along with many national and trans-boundary river
					introduce this homeland as a riverine country.
				</p>
				<p class="mt-4 text-gray-700">
					The current project, is designed to assemble and disseminate
					information of the morphological study of all national and
					trans-boundary rivers of the Bangladesh.
				</p>
				<p class="mt-4 text-gray-700">
					Rivers of Bangladesh website also provides a platform to the
					researchers as well as the riverine people to contribute to
					the knowledge of the rivers of Bangladesh. Interested people
					can contribute by sharing and providing information of the
					rivers and abundances using the web portal.
				</p>

				<NuxtLink
					to="/database"
					class="mt-12 group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
				>
					<span
						class="absolute inset-0 border border-[#0077B6] group-active:border-[#0077B6]"
					></span>
					<span
						class="block border border-[#0077B6] bg-[#0077B6] px-12 py-3 transition-transform active:border-[#0077B6] active:bg-[#0077B6] group-hover:-translate-x-1 group-hover:-translate-y-1"
					>
						Explore the Database
					</span>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
