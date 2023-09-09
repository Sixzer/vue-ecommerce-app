<script setup lang="ts">
import { ref, onMounted, watch, watchEffect } from "vue";
import axios from "axios";
import { type ITovar } from "@/assets/interfaces";
import ProductsItem from "@/components/UI/ProductsItem.vue";
import NoResults from "@/components/UI/NoResults.vue";
import Spinner from "@/components/UI/Spinner.vue";

const responseApi = ref<ITovar[]>([]);
const productsList = ref<ITovar[]>([]);
const props = defineProps<{ sortMethod: string; findMethod: string }>();

onMounted(() => fetchUsers());

const fetchUsers = async () => {
    try {
        const response = await axios.get(
            "https://fakestoreapi.com/products?limit=15"
        );

        responseApi.value = response.data;
    } catch (error) {
        console.log(error);
    }
};

watch(responseApi, () => {
    productsList.value = responseApi.value;
});

watch(
    () => props.sortMethod,
    (method) => {
        switch (method) {
            case "priceHighToLow":
                productsList.value = productsList.value?.sort(
                    (a, b) => b.price - a.price
                );
                break;
            case "priceLowToHigh":
                productsList.value = productsList.value?.sort(
                    (a, b) => a.price - b.price
                );
                break;
            case "ratingHighToLow":
                productsList.value = productsList.value.sort(
                    (a, b) => b.rating.rate - a.rating.rate
                );
            case "ratingLowToHigh":
                productsList.value = productsList.value.sort(
                    (a, b) => a.rating.rate - b.rating.rate
                );
            default:
                break;
        }
    }
);

watchEffect(() => {
    productsList.value = [...responseApi.value].filter((product) =>
        product.title
            .toLowerCase()
            .includes(props.findMethod.trim().toLowerCase())
    );
});
</script>

<template>
    <section class="products">
        <ul class="products-list" v-if="productsList.length > 0">
            <ProductsItem
                :product="product"
                v-for="product in productsList"
                :key="product.id"
            />
        </ul>
        <NoResults v-else-if="findMethod" :find="findMethod" />
        <Spinner v-else />
    </section>
</template>

<style scoped>
.products-list {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 280px);
    justify-content: space-between;
    row-gap: 20px;
}
</style>
