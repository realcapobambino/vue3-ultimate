<template>
  <SignUp />
</template>

<script>
import SignUp from './components/SignUp.vue';


export default {
  name: 'App',
  components: {
    SignUp
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #eee;
}
</style>
