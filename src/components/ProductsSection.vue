<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { type IProduct } from "@/assets/interfaces";
import { useShopStore } from "@/stores/store";
import ProductsItem from "@/components/UI/ProductsItem.vue";
import NoResults from "@/components/UI/NoResults.vue";
import ProgressSpinner from "primevue/progressspinner";

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
    <section>
        <section
            class="products-grid p-0 list-none justify-content-between gap-2"
            v-if="productsList.length > 0"
        >
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
        <section v-else class="card flex justify-content-center">
            <ProgressSpinner />
        </section>
    </section>
</template>

<style scoped>
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 280px);
}
</style>
