<script setup lang="ts">
import { computed } from "vue";
import { type IProduct } from "@/assets/interfaces";
import ProductsItem from "@/components/UI/ProductsItem.vue";
import { useShopStore } from "@/stores/store";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const shopStore = useShopStore();
const productsList = computed<IProduct[]>(() => {
    return shopStore.products
        .sort((item1, item2) => item2.rating.rate - item1.rating.rate)
        .slice(0, 5);
});
</script>

<template>
    <header class="text-center py-3">
        <h1 class="text-xlg m-0">eCommerce App</h1>
    </header>

    <article class="flex flex-column">
        <h2 class="align-self-center">Featured products</h2>
        <section
            class="productsList-grid p-0 list-none justify-content-between row-gap-2"
            v-if="productsList.length > 0"
        >
            <ProductsItem
                :product="product"
                v-for="product in productsList"
                :key="product.id"
            />
        </section>
        <Spinner v-else />
    </article>

    <article class="text-center my-5">
        <h2>Subscribe to newsletter</h2>
        <p class="my-2">
            Receive push notifications of new goods and discounts.
        </p>
        <form
            @submit.prevent
            class="flex justify-content-center align-items-center"
        >
            <InputText
                type="text"
                placeholder="Enter email..."
                class="p-2 mr-3"
            />
            <Button type="submit" label="Subscribe" class="p-2" />
        </form>
    </article>
</template>

<style scoped>
.productsList-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 270px);
}
</style>
