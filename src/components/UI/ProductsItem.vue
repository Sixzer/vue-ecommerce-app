<script setup lang="ts">
import { type IProduct } from "@/assets/interfaces";
import { RouterLink } from "vue-router";
import { useShopStore } from "@/stores/store";

const props = defineProps<{ product: IProduct }>();
const shopStore = useShopStore();
const { product } = props;

const { addItemToCart } = shopStore;

const handleClick = () => {
    shopStore.setProductId(product.id);
};
</script>

<template>
    <section class="product-card">
        <RouterLink
            :to="'/products/' + product.id"
            class="product-item"
            @click="handleClick"
        >
            <img
                :src="product.image"
                alt="Product Image"
                class="product-image"
            />
            <h3 class="product-title">{{ product.title }}</h3>
            <article class="product-info">
                <p class="product-info__price">{{ product.price }} $</p>
                <article class="product-info__rating">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="rgb(255, 191, 0)"
                        style="width: 15px; margin-top: 5px"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>

                    <span class="product-info__rating__rate"
                        >{{ product.rating.rate }}
                    </span>
                    <span class="product-info__rating__count">{{
                        product.rating.count
                    }}</span>
                </article>
            </article>
        </RouterLink>
        <button @click="addItemToCart(product.id)" class="product-button">
            Add to cart
        </button>
    </section>
</template>

<style scoped>
.product-card {
    border: 1px solid #ddd;
    padding: 1rem;
    margin: 1rem;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-item {
    text-decoration: none;
    cursor: pointer;
}

.product-info {
    display: flex;
    justify-content: space-between;
}

.product-image {
    width: 100%;
    height: 250px;
    object-fit: contain;
}

.product-title {
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #333;
    text-wrap: balance;
}

.product-info__price,
.product-info__rating__rate,
.product-info__rating__count {
    margin-top: 5px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
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

.product-button {
    background-color: transparent;
    color: #333;
    border: 1px solid #333;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
    transition: color 0.3s ease;
    justify-self: flex-end;
}

.product-button:hover {
    background-color: #333;
    color: white;
}
</style>
