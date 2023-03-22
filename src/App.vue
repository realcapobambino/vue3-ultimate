<template>
  <h1> {{ title }} </h1>
  <div>
    <input type="text" ref="inputfield">
    <button @click="handleClick">Click Me!</button>
  </div>

  <!-- teleport this modal to the div below vue app div -->
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="">sign up</a>
        <a href="">more info</a>
      </template>
      <h1>Ultimate Giveaway</h1>
      <p>Up to 50% OFF!!</p>
    </Modal>
  </teleport>
  <p>Custom Event Emmiter 👇🏾 </p>
  <button @click="toggleModal">Show Modal</button>
  <!--  -->
  <div>
    <h2>Challenge</h2>
    <p>Another Modal</p>
    <div v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
        <template v-slot:another>
          <a href="">Sign Up</a>
          <a href="">Log In</a>
        </template>
        <h2>Sign Up Now</h2>
        <p>For updates and promo codes</p>
      </Modal>
    </div>
    <button @click="toggleModalTwo">Show Modal Two</button>
  </div>
</template>
<script>
import Modal from './components/Modal.vue'
//
export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'VueJs Ultimate Web App ;)',
      showModal: false,
      showModalTwo: false,
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
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app,
.modals {
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
