<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { type ITovar } from "@/assets/interfaces";
import ProductsItem from "./ProductsItem.vue";

onMounted(() => fetchUsers());

const productsList = ref<ITovar[] | null>(null);

const fetchUsers = async () => {
    try {
        const response = await axios.get(
            "https://fakestoreapi.com/products?limit=20"
        );

        productsList.value = response.data;
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <section class="products">
        <ul class="products-list">
            <ProductsItem
                v-bind:product="product"
                v-for="product in productsList"
                :key="product.id"
            />
        </ul>
    </section>
</template>

<style scoped>
.products-list {
    list-style: none;
    display: flex;
    justify-self: center;
    align-items: flex-start;
    flex-wrap: wrap;
}
</style>
