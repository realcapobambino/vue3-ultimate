<template>
    <!-- .self modifies the click event. click works only on modal and not the elements inside it -->
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <!-- 'default content is a fallback if there is no content ' -->
            <slot>
                default content
            </slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
            <!-- second modal -->
            <div class="actions">
                <slot name="another"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['theme'],
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

.modal .actions {
    text-align: center;
    margin: 30px 10 px;

}

.modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px
}

.modal.sale {
    background-color: crimson;
    color: white;
}

.modal.sale h1 {
    color: white;
}

.modal.sale .actions {
    color: white;
}

.modal.sale .actions a {
    color: white;
}
</style>