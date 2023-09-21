<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { type IProduct } from "@/assets/interfaces";
import { useShopStore } from "@/stores/store";
import ProductsItem from "@/components/UI/ProductsItem.vue";
import NoResults from "@/components/UI/NoResults.vue";
import Spinner from "@/components/UI/Spinner.vue";

const shopStore = useShopStore();
const productsList = ref<IProduct[]>([]);

onMounted(() => {
    productsList.value = shopStore.products;
});

watch(
    () => shopStore.products,
    () => {
        productsList.value = shopStore.products;
    }
);

watch(
    () => shopStore.sortQuery,
    (method: string) => {
        switch (method) {
            case "priceHighToLow":
                productsList.value = productsList.value.sort(
                    (product1, product2) => product2.price - product1.price
                );
                break;
            case "priceLowToHigh":
                productsList.value = productsList.value.sort(
                    (product1, product2) => product1.price - product2.price
                );
                break;
            case "ratingHighToLow":
                productsList.value = productsList.value.sort(
                    (product1, product2) =>
                        product2.rating.rate - product1.rating.rate
                );
                break;
            case "ratingLowToHigh":
                productsList.value = productsList.value.sort(
                    (product1, product2) =>
                        product1.rating.rate - product2.rating.rate
                );
            default:
                break;
        }
    }
);

watch(
    () => shopStore.searchQuery,
    (searchQuery: string) => {
        productsList.value = shopStore.products.filter((product) =>
            product.title
                .toLowerCase()
                .includes(searchQuery.trim().toLowerCase())
        );
    }
);
</script>

<template>
    <section class="products">
        <section class="products-list" v-if="productsList.length > 0">
            <ProductsItem
                :product="product"
                v-for="product in productsList"
                :key="product.id"
            />
        </section>
        <NoResults
            v-else-if="shopStore.searchQuery"
            :search="shopStore.searchQuery"
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
