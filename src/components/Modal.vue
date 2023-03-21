<template>
    <!-- .self modifies the click event. click works only on modal and not the elements inside it -->
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>{{ text }}</h1>
            <p>{{ header }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'text', 'theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}

</script>

<style>
.modal {
    width: 30rem;
    padding: 20px;
    margin: 100px auto;
    background-color: white;
    border-radius: 10px;
}

.backdrop {
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.modal h1 {
    color: blue;
    border: none;
    padding: 0;
}

.modal p {
    font-style: normal;
}

.modal.sale {
    background-color: crimson;
    color: white;
}

.modal.sale h1 {
    color: white;
}
</style>