<script setup lang="ts">
import { type ITovar } from "@/assets/interfaces";
const props = defineProps<{ product: ITovar }>();

const { product } = props;
</script>

<template>
    <li class="product-card">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-price">{{ product.price }} $</p>
        <button class="product-button">Add to cart</button>
    </li>
</template>

<style scoped>
.product-card {
    border: 1px solid #ddd;
    padding: 1rem;
    margin: 1rem;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.product-title {
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
}

.product-price {
    margin-top: 5px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
}

.product-button {
    background-color: transparent;
    color: #333;
    border: 1px solid #333;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
    justify-self: flex-end;
}

.product-button:hover {
    background-color: #333;
    color: white;
}
</style>
