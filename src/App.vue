<template>
  <h1> {{ title }} </h1>
  <div>
    <input type="text" ref="inputfield">
    <button @click="handleClick">Click Me!</button>
  </div>
  <Modal :header="header" :text="text" theme="sale" />
</template>

<script>

import Modal from './components/Modal.vue'


export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'VueJs Ultimate Web App ;)',
      header: 'Sign Up for the Promo',
      text: 'Up to 50% Off!!'

    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.inputfield)
      this.$refs.inputfield.classList.add('active')
      this.$refs.inputfield.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
