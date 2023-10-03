<script setup lang="ts">
import type { IProduct } from "@/assets/interfaces";
import { useShopStore } from "@/stores/store";
import { onMounted, ref } from "vue";
import Spinner from "./UI/Spinner.vue";
import Badge from "primevue/badge";

const shopStore = useShopStore();
const product = ref<IProduct>();

onMounted(() => {
    shopStore
        .getSingleProduct(shopStore.productId)
        .then((data) => (product.value = data));
});
</script>

<template>
    <section class="product">
        <section class="product-section" v-if="product">
            <img class="product-image" :src="product.image" alt="img" />
            <article class="product-item">
                <article class="product-info">
                    <h2 class="product-info__title">{{ product.title }}</h2>
                    <p class="product-info__desc">
                        {{ product.description }}
                    </p>
                    <p class="product-info__price">{{ product.price }} $</p>
                    <article class="product-info__rating">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="rgb(255, 191, 0)"
                            style="width: 20px"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span class="product-info__rating__rate">{{
                            product.rating.rate
                        }}</span>
                        <span class="product-info__rating__count">{{
                            product.rating.count
                        }}</span>
                    </article>
                </article>
                <button
                    class="product-btn"
                    @click="shopStore.addItemToCart(product.id)"
                >
                    Add to cart
                </button>

                <div class="card flex flex-wrap justify-content-center gap-4">
                    <i
                        v-badge="2"
                        class="pi pi-bell p-overlay-badge"
                        style="font-size: 2rem"
                    />
                    <i
                        v-badge.danger="'5+'"
                        class="pi pi-calendar p-overlay-badge"
                        style="font-size: 2rem"
                        ><Badge value="2"></Badge
                    ></i>
                    <i
                        v-badge.danger
                        class="pi pi-envelope p-overlay-badge"
                        style="font-size: 2rem"
                    />
                </div>
            </article>
        </section>
        <Spinner v-else />
    </section>
</template>

<style scoped>
.product {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 50px;
}

.product-section {
    display: flex;
    gap: 20px;
}

.product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-left: 1px solid #333;
    padding-left: 20px;
}

.product-image {
    width: 350px;
    height: 350px;
    object-fit: contain;
    border: 10px soild #333;
}

.product-info {
    font-size: 20px;
    line-height: 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.product-info__title {
    margin-top: 10px;
    font-weight: bold;
    color: #333;
}

.product-info__desc {
    text-wrap: balance;
}

.product-info__price,
.product-info__rating__rate,
.product-info__rating__count {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
}

.product-info__rating {
    display: flex;
    gap: 5px;
}

.product-info__rating__rate::after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background-color: rgba(0, 0, 0, 0.6);
    margin: 0 0 2px 5px;
}

.product-info__rating {
    display: flex;
    gap: 5px;
}

.product-btn {
    background-color: transparent;
    color: #333;
    border: 1px solid #333;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
    align-self: flex-start;
    font-size: 20px;
    line-height: 24px;
}

.product-btn:hover {
    background-color: #333;
    color: white;
}
</style>
