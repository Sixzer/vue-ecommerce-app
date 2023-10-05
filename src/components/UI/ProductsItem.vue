<script setup lang="ts">
import { type IProduct } from "@/assets/interfaces";
import { RouterLink } from "vue-router";
import { useShopStore } from "@/stores/store";
import Rating from "primevue/rating";
import Button from "primevue/button";

const props = defineProps<{ product: IProduct }>();
const shopStore = useShopStore();
const { product } = props;

const { addItemToCart } = shopStore;

const handleClick = () => {
    shopStore.setProductId(product.id);
};
</script>

<template>
    <section
        class="card flex flex-column justify-content-between align-items-stretch p-3 m-3 border-round-sm transition-transform transition-duration-300 animation-ease-in-out shadow-4"
    >
        <RouterLink
            :to="'/products/' + product.id"
            class="no-underline cursor-pointer"
            @click="handleClick"
        >
            <img
                :src="product.image"
                alt="Product Image"
                class="w-full h-15rem"
                style="object-fit: contain"
            />
            <h3
                class="text-900 font-bold mt-2 text-sm line-height-2"
                style="text-wrap: balance"
            >
                {{ product.title }}
            </h3>
            <article
                class="flex justify-content-between align-items-center mt-2"
            >
                <p
                    class="product-info__price font-bold text-lg line-height-2 text-600"
                >
                    {{ product.price }} $
                </p>
                <Rating
                    v-model="product.rating.rate"
                    :cancel="false"
                    readonly
                />
            </article>
        </RouterLink>

        <Button
            label="Add to cart"
            size="small"
            @click="addItemToCart(product.id)"
            class="mt-3"
        />
    </section>
</template>

<style scoped>
.card:hover {
    transform: translateY(-5px);
}
</style>
