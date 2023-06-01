<template>
	<div>
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
		<div class="card home3">
			<h1>computed properties</h1>
			<input type="text" v-model="search" />
			<p>search term - {{ search }}</p>
			<div v-for="name in matcingNames" :key="name">
				{{ name }}
			</div>
		</div>
	</div>
</template>

<script>
	import { computed, ref, reactive, watch } from 'vue'

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
			// computed

			const search = ref('')
			const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bower', 'peach'])

			watch(search, () => {})

			const matcingNames = computed(() => {
				return names.value.filter((name) => name.includes(search.value))
			})

			return {
				name,
				age,
				handleClick,
				humanOne,
				updateHumanOne,
				humanTwo,
				updateHumanTwo,
				names,
				search,
				matcingNames,
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

<style scoped>
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
	.home3 {
		background-color: fuchsia;
		color: black;
	}
	button {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
			sans-serif;
		font-style: oblique;
		color: black;
		margin: 10px;
		padding: 10px;
		background-color: white;
		border: none;
		border-radius: 15px;
	}
	input {
		padding: 10px;
	}
</style>
