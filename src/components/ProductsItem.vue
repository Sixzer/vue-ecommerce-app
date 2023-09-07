<script setup lang="ts">
import { type ITovar } from "@/assets/interfaces";
const props = defineProps<{ product: ITovar }>();

const { product } = props;
</script>

<template>
    <li class="product-card">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-description">
            {{ product.description.slice(0, 50) + "..." }}
        </p>
        <div class="product-price">{{ product.price }} $</div>
        <button class="add-to-cart-button">Add to cart</button>
    </li>
</template>

<style scoped>
.product-card {
    border: 1px solid #ddd;
    padding: 1rem;
    margin: 1rem;
    max-width: 200px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
}

.product-image {
    max-width: 100%;
}

.product-title {
    font-size: 1.2rem;
    margin-top: 0.5rem;
}

.product-description {
    margin-top: 0.5rem;
    color: #555;
}

.product-price {
    font-weight: bold;
    margin-top: 0.5rem;
    color: #333;
}

.add-to-cart-button {
    background-color: transparent;
    color: #333;
    border: 1px solid #333;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
}

.add-to-cart-button:hover {
    background-color: #333;
    color: white;
}
</style>
