<template>
	<div class="home">
		<h1>HOME</h1>
		<div v-if="error" class="error">{{ error }}</div>
		<div v-if="posts.length">
			<PostList :posts="posts" />
		</div>
		<div v-else>Loading...</div>

		<!-- <PostList v-if="showPosts" :posts="posts" /> -->
		<!-- <button @click="showPosts = !showPosts">toggle posts</button> -->
		<!-- <button @click="posts.pop()">Delete</button> -->
	</div>
</template>

<script>
	import PostList from '@/components/PostList.vue'
	import getPosts from '@/composables/getPosts'

	export default {
		name: 'Home',
		components: { PostList },
		setup() {
			const { posts, error, load } = getPosts()

			load()

			return { posts, error }
		},
	}
</script>

<style>
	.error {
		border-radius: 50px;
		padding: 40px;
		background-color: rgb(138, 46, 46);
		max-width: 1200px;
		margin: 0 auto;
		color: white;
	}
</style>
