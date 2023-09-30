<script setup>
defineProps(["path"]);
</script>

<template>
	<main>
		<ContentList :path="`/database/${path}`" v-slot="{ list }">
			<div v-for="article in list" :key="article._path">
				<template v-if="article._dir !== 'database'">
				<h2>{{ article.title }}</h2>
				<p>{{ article.description }}</p>
				</template>
			</div>
		</ContentList>
	</main>
</template>
