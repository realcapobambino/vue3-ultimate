<template>
  <div class="home">
    Home
    <p>My name is {{ name }}. I am {{ age }} years old</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  setup() {
    console.log('setup')

    let name = 'Karen'
    let age = 26


    const handleClick = () => {
      console.log('clicked')
    }

    return {
      name,
      age,
      handleClick
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
