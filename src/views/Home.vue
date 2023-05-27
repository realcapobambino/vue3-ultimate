<template>
	<div class="home">
		Home
		<p ref="p">My name is {{ name }}. I am {{ age }} years old</p>
		<button @click="handleClick">Click Me</button>
	</div>
</template>

<script>
	import { ref } from 'vue'

	export default {
		name: 'Home',
		setup() {
			// const p = ref(null)

			const name = ref('karen')
			const age = ref(30)

			// let name = 'Karen'
			// let age = 26

			const handleClick = () => {
				// console.log(p, p.value)
				// p.value.classList.add('test')
				// p.value.textContent = 'Hello World'
				// name = 'kate'

				name.value = 'kate'
				age.value = 26
			}

			return {
				name,
				age,
				handleClick,
			}
		},
		// created() {
		//   console.log('created hook')
		// },
		// mounted() {
		//   console.log('mounted hook')
		// },
	}
</script>

<style>
	.home {
		background-color: green;
	}
</style>
