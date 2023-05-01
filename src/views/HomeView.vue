<template>
  <div class="home">
    Home

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  setup() {
    console.log('setup')
  },
  created() {
    console.log('created hook')
  },
  mounted() {
    console.log('mounted hook')
  },
}
</script>
