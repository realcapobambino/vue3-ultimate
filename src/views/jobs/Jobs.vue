<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <h2>{{ job.title }}</h2>
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