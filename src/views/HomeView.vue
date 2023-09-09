<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { type ITovar } from "@/assets/interfaces";
import ProductsItem from "@/components/UI/ProductsItem.vue";
import Spinner from "@/components/UI/Spinner.vue";

onMounted(() => fetchUsers());

const productsList = ref<ITovar[] | null>(null);

const fetchUsers = async () => {
    try {
        const response = await axios.get(
            "https://fakestoreapi.com/products?limit=5"
        );

        productsList.value = response.data;
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <header class="header">
        <h1 class="header-title">eCommerce App</h1>
    </header>

    <article class="featuredProducts">
        <h2 class="featuredProducts__title">Featured products</h2>
        <ul class="featuredProducts__list" v-if="productsList">
            <ProductsItem
                :product="product"
                v-for="product in productsList"
                :key="product.id"
            />
        </ul>
        <Spinner v-else />
    </article>

    <article class="newsletter">
        <h2>Subscribe to newsletter</h2>
        <p>Receive push notifications of new goods and discounts.</p>
        <form @submit.prevent>
            <input type="email" placeholder="Enter your email..." />
            <button type="submit">Subscribe</button>
        </form>
    </article>
</template>

<style scoped>
.header {
    text-align: center;
    padding: 30px 0;
}

.header-title {
    font-size: 36px;
    margin: 0;
}

.featuredProducts {
    display: flex;
    flex-direction: column;
    align-items: space-between;
}

.featuredProducts__title {
    align-self: center;
}

.newsletter {
    text-align: center;
    margin: 40px 0;
}

.newsletter p {
    margin: 10px 0;
}

.newsletter form {
    display: flex;
    justify-content: center;
    align-items: center;
}

.newsletter input[type="email"] {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 250px;
    margin-right: 10px;
}

.newsletter button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
}

.featuredProducts__list {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 270px);
    justify-content: space-between;
    row-gap: 20px;
}
</style>
