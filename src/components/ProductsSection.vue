<script setup lang="ts">
import { ref, onMounted, watch, watchEffect } from "vue";

import { type ITovar } from "@/assets/interfaces";
import { useShopStore } from "@/stores/store";
import ProductsItem from "@/components/UI/ProductsItem.vue";
import NoResults from "@/components/UI/NoResults.vue";
import Spinner from "@/components/UI/Spinner.vue";

const shopStore = useShopStore();
const productsList = ref<ITovar[]>([]);

watchEffect(() => {
    productsList.value = [...shopStore.data];
});

watch(
    () => shopStore.selectedSort,
    (method) => {
        switch (method) {
            case "priceHighToLow":
                productsList.value = productsList.value.sort(
                    (a, b) => b.price - a.price
                );
                break;
            case "priceLowToHigh":
                productsList.value = productsList.value.sort(
                    (a, b) => a.price - b.price
                );
                break;
            case "ratingHighToLow":
                productsList.value = productsList.value.sort(
                    (a, b) => b.rating.rate - a.rating.rate
                );
                break;
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
    productsList.value = [...shopStore.data].filter((product) =>
        product.title
            .toLowerCase()
            .includes(shopStore.selectedSearch.trim().toLowerCase())
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
        <NoResults
            v-else-if="shopStore.selectedSearch"
            :search="shopStore.selectedSearch"
        />
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
@/stores/store
