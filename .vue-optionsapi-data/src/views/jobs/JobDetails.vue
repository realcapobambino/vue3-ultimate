<template>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <p>The job ID is {{ job.id }}</p>
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <h4>Loading Job Details...</h4>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            // id: this.$route.params.id
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    }
}

</script>

<style></style>