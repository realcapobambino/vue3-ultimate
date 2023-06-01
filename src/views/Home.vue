<template>
	<div class="home">
		<h1>HOME</h1>
		<PostList v-if="showPosts" :posts="posts" />
		<button @click="showPosts = !showPosts">toggle posts</button>
		<button @click="posts.pop()">Delete</button>
	</div>
</template>

<script>
	import { ref } from 'vue'
	import PostList from '@/components/PostList.vue'

	export default {
		name: 'Home',
		components: { PostList },
		setup() {
			const posts = ref([
				{
					title: 'welcome to the blog',
					body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi praesentium, tenetur voluptate voluptatem error porro officiis fugit repellat nam cumque perferendis quod unde, similique nihil deleniti saepe magnam? Odio?',
					id: 1,
				},
				{ title: 'top tech tips', body: 'lorem ipsum ipsum', id: 2 },
			])

			const showPosts = ref(true)

			return { posts, showPosts }
		},
	}
</script>

<style scoped></style>
