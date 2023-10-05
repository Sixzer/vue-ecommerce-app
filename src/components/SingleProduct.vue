<script setup lang="ts">
import type { IProduct } from "@/assets/interfaces";
import { useShopStore } from "@/stores/store";
import { onMounted, ref } from "vue";
import Button from "primevue/button";
import Divider from "primevue/divider";
import ProgressSpinner from "primevue/progressspinner";
import Rating from "primevue/rating";

const shopStore = useShopStore();
const product = ref<IProduct>();

onMounted(() => {
    shopStore
        .getSingleProduct(shopStore.productId)
        .then((data) => (product.value = data));
});
</script>

<template>
    <section class="flex justify-content-center align-items-center m-6">
        <section class="flex gap-5" v-if="product">
            <img
                class="w-3 h-20rem"
                style="object-fit: contain"
                :src="product.image"
                alt="img"
            />

            <Divider layout="vertical" />

            <article
                class="flex flex-column align-items-center justify-content-between"
            >
                <article class="flex flex-column gap-3 text-lg line-height-1">
                    <h2 class="font-bold">
                        {{ product.title }}
                    </h2>
                    <p class="" style="text-wrap: balance">
                        {{ product.description }}
                    </p>
                    <p class="font-bold uppercase">{{ product.price }} $</p>
                    <article class="flex gap-1">
                        <Rating
                            v-model="product.rating.rate"
                            :cancel="false"
                            readonly
                        />
                    </article>
                </article>

                <Button
                    class="align-self-start"
                    @click="shopStore.addItemToCart(product.id)"
                    label="Add to cart"
                />
            </article>
        </section>

        <div class="card flex justify-content-center" v-else>
            <ProgressSpinner />
        </div>
    </section>
</template>

<style scoped></style>
