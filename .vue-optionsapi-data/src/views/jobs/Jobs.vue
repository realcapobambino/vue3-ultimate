<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div class="job" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <h4>Loading Jobs..</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  // data is fetched on the mounted life cycle hook. - when the component is mounted on the DOM
  mounted() {
    // fetch API - promises - async API
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style>
/*  */
/*  */
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #222;
}

.job h2:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
}
</style>
