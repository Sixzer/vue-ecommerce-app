<template>
    <section class="spinner">
        <p class="spinner-circle"></p>
    </section>
</template>

<style scoped>
.spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px; /* Размеры и позиция можно настроить по вашему усмотрению */
}

.spinner-circle {
    border: 4px solid #ccc;
    border-top: 4px solid #333;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
