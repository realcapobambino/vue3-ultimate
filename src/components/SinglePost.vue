<template>
	<div class="post">
		<router-link :to="{ name: 'Details', params: { id: post.id } }">
			<h3>{{ post.title }}</h3>
		</router-link>
		<p>{{ snippet }}</p>
		<span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
	</div>
</template>

<script>
	import { computed } from '@vue/reactivity'

	export default {
		props: ['post'],
		setup(props) {
			const snippet = computed(() => {
				return props.post.body.substring(0, 100) + '...'
			})
			return { snippet }
		},
	}
</script>

<style scoped>
	.post {
		max-width: 75%;
		margin: 0 auto;
		margin-bottom: 15px;
		color: white;
		border: 1px solid;
		border-color: purple;
		border-radius: 5%;
	}
	div a {
		font-weight: bold;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		color: blue;
		text-decoration: none;
	}
</style>
