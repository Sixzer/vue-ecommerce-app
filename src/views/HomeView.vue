<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { type ITovar } from "@/assets/interfaces";
import ProductsItem from "@/components/UI/ProductsItem.vue";

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
        <h1>eCommerce App</h1>
    </header>

    <section class="featured-products">
        <h2>Featured products</h2>
        <ul class="products-list">
            <ProductsItem
                :product="product"
                v-for="product in productsList"
                :key="product.id"
            />
        </ul>
    </section>

    <section class="newsletter">
        <h2>Subscribe to newsletter</h2>
        <p>Receive push notifications of new goods and discounts.</p>
        <form>
            <input type="email" placeholder="Enter your email..." />
            <button type="submit">Subscribe</button>
        </form>
    </section>
</template>

<style scoped>
.header {
    text-align: center;
    padding: 20px 0;
}

.header h1 {
    font-size: 36px;
    margin: 0;
}

.main-nav ul {
    list-style: none;
    padding: 0;
}

.main-nav li {
    display: inline;
    margin-right: 20px;
}

.main-nav a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

.featured-products {
    margin: 40px 0;
    text-align: center;
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

.footer {
    text-align: center;
    padding: 20px 0;
    background-color: #333;
    color: white;
}

.footer p {
    margin: 0;
}

.products-list {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 270px);
    justify-content: space-between;
    row-gap: 20px;
}
</style>
