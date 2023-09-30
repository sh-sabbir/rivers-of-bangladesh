<template>
	<div>
		<Header />
		<NuxtPage />
		<Footer />
	</div>
</template>

<script setup>
useHead({
	htmlAttrs: { lang: "en" },
	bodyAttrs: {
		class: "bg-[#FCFFFC]",
	},
	// link: [
	// 	{
	// 		rel: "icon",
	// 		type: "image/png",
	// 		href: getStrapiMedia(global?.favicon?.data?.attributes?.url),
	// 	},
	// ],
	// meta: [
	// 	{ name: "description", content: global?.defaultSeo?.metaDescription },
	// 	{ name: "og:title", content: global?.defaultSeo?.metaTitle },
	// 	{
	// 		name: "og:description",
	// 		content: global?.defaultSeo?.metaDescription,
	// 	},
	// 	{ name: "og:type", content: "website" },
	// 	{ name: "og:locale", content: "en_US" },
	// 	{
	// 		name: "og:image",
	// 		content: getStrapiMedia(
	// 			global?.defaultSeo?.shareImage?.data.attributes.url
	// 		),
	// 	},
	// ],
});
</script>
