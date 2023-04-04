<template>
    <h1>Jobs</h1>
    <div class="job" v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>


<script>

export default {
    data() {
        return {
            jobs: [
                { title: "Vue Developer", id: 1, details: 'Lorem' },
                { title: "React Developer", id: 2, details: 'Lorem' },
                { title: "Angular Developer", id: 3, details: 'Lorem' },
            ]
        }
    }
}

</script>

<style>
/*  */
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #222
}

.job h2:hover {
    background: #ddd;
}

.job a {
    text-decoration: none;
}
</style>