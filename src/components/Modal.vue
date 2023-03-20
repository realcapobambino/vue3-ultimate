<template>
    <div class="backdrop">
        <div class="modal">
            <p>content right here</p>
        </div>
    </div>
</template>

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
</style>