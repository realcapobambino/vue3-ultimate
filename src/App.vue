<template>
  <h1> {{ title }} </h1>
  <div>
    <input type="text" ref="inputfield">
    <button @click="handleClick">Click Me!</button>
  </div>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">

      <template v-slot:links>
        <a href="">sign up</a>
        <a href="">more info</a>
      </template>
      <h1>Ultimate Giveaway</h1>
      <p>Up to 50% OFF!!</p>


    </Modal>
  </div>
  <p>Custom Event Emmiter 👇🏾 </p>
  <button @click="toggleModal">Show Modal</button>
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
      text: 'Up to 50% Off!!',
      showModal: false,
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.inputfield)
      this.$refs.inputfield.classList.add('active')
      this.$refs.inputfield.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
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
