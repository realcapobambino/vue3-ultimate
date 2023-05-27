<template>
	<div class="card home1">
		<h1>Home</h1>
		<p ref="p">My name is {{ name }}. I am {{ age }} years old</p>
		<button @click="handleClick">Click Me</button>
		<button @click="age++">Add 1</button>
		<input type="text" v-model="name" />
	</div>
	<div class="card home2">
		<h1>using refs</h1>
		<p>{{ humanOne.name }} - {{ humanOne.age }}</p>
		<button @click="updateHumanOne">Update Human One</button>
		<h1>using reactive</h1>
		<p>{{ humanTwo.name }} - {{ humanTwo.age }}</p>
		<button @click="updateHumanTwo">Update Human Two</button>
	</div>
</template>

<script>
	import { ref, reactive } from 'vue'

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

			const humanOne = ref({ name: 'Atom', age: 25 })
			const humanTwo = reactive({ name: 'Ele', age: 24 })

			const updateHumanOne = () => {
				humanOne.value.age = 30
			}

			const updateHumanTwo = () => {
				humanTwo.age = 28
			}

			return {
				name,
				age,
				handleClick,
				humanOne,
				updateHumanOne,
				humanTwo,
				updateHumanTwo,
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
	.card {
		max-width: 75%;
		padding: 10px;
		margin: 25px auto;
		margin-bottom: 20px;
		border-radius: 30px;
		color: white;
	}
	.home1 {
		background-color: green;
	}
	.home2 {
		background-color: aqua;
		color: black;
	}
</style>
