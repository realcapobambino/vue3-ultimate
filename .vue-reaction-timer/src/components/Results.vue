<template>
    <h3>Your reaction time is :</h3>
    <h2>{{ score }} ms</h2>
    <h3 class="rank">{{ rank }}</h3>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = 'Awesome Reflexes 🦾'
        } else if (this.score < 400) {
            this.rank = 'Not Bad...'
        } else {
            this.rank = 'Too Slow'
        }
    }
}
</script>

<style>
.rank {
    font-size: 1.4em;
    color: blueviolet;
    font-weight: bold;
}
</style>