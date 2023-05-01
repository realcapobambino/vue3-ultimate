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
  name: 'HomeView',
  setup() {

    const p = ref(null)

    let name = 'Karen'
    let age = 26


    const handleClick = () => {
      console.log(p, p.value)
    }

    return {
      name,
      age,
      handleClick,
      p
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
