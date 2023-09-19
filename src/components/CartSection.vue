<script setup lang="ts">
import type { ICartProduct } from "@/assets/interfaces";
import { onMounted, ref, watch } from "vue";
import { useShopStore } from "@/stores/store";

const cartList = ref<ICartProduct[]>([]);
const shopStore = useShopStore();
const price = ref(0);
const shippingPrice = ref("");
const totalPrice = ref(0);

onMounted(() => {
    cartList.value = shopStore.cart;
});

watch(
    () => shopStore.cart,
    () => {
        cartList.value = shopStore.cart;
    }
);

watch(cartList, () => {
    price.value = cartList.value.reduce(
        (acc, val) => (acc += val.price * val.quantity),
        0
    );
});

watch([shippingPrice, price], () => {
    totalPrice.value = +shippingPrice.value + price.value;
});
</script>

<template>
    <section class="cart">
        <section class="cart-list">
            <article class="cart-list__header">
                <h2 class="cart-list__header__title">Shopping cart</h2>
                <span class="cart-list__header__label"
                    >{{ cartList.length }} items</span
                >
            </article>
            <section class="cart-list__item" v-if="cartList.length > 0">
                <div class="cart-list__product" v-for="product in cartList">
                    <img
                        class="cart-list__product__img"
                        :src="product.image"
                        alt="img"
                    />
                    <div class="cart-list__product__info">
                        <div class="cart-list__product__info__title">
                            {{ product.title }}
                        </div>
                        <div class="cart-list__product__info__category">
                            {{ product.category }}
                        </div>
                    </div>

                    <div class="cart-list__product__quantity">
                        <span class="cart-list__product__quantity__item">
                            {{ product.quantity }}</span
                        >
                    </div>

                    <div class="cart-list__product__price">
                        <span class="cart-list__product__price__item"
                            >{{ product.price }} $</span
                        >
                    </div>
                    <button
                        class="cart-list__product__btn"
                        @click="shopStore.removeItemFromCart(product.id)"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="{1.5}"
                            stroke="currentColor"
                            style="width: 20px; height: 20px"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </section>
            <section v-else class="cart-list__empty">
                <h3 class="cart-list__empty__title">Cart is empty</h3>
            </section>
        </section>
        <section class="cart-summary">
            <article class="cart-summary__header">
                <h2 class="cart-summary__header__title">Summary</h2>
            </article>
            <section class="cart-summary__item">
                <div class="cart-summary__item__header">
                    <h3 class="cart-summary__item__header__title">
                        items {{ cartList.length }}
                    </h3>
                    <div class="cart-summary__item__header__label">
                        {{ price.toFixed(2) }} $
                    </div>
                </div>
                <div class="cart-summary__item__shipping">
                    <h3 class="cart-summary__item__shipping__title">
                        shipping
                    </h3>
                    <select
                        class="cart-summary__item__shipping__select"
                        v-model="shippingPrice"
                    >
                        <option value="" disabled>
                            Choose delivery method
                        </option>
                        <option value="0">Pickup Point + 0$</option>
                        <option value="5">Standart Delivery + 5$</option>
                        <option value="10">Extra Delivery + 10$</option>
                    </select>
                </div>
                <div class="cart-summary__item__promo">
                    <h3 class="cart-summary__item__promo__title">promo</h3>
                    <input
                        class="cart-summary__item__promo__input"
                        type="text"
                        placeholder="Enter your code..."
                    />
                </div>
            </section>
            <section class="cart-summary__checkout">
                <div class="cart-summary__checkout__header">
                    <h3 class="cart-summary__checkout__header__title">
                        total price
                    </h3>
                    <span class="cart-summary__checkout__header__label"
                        >{{ totalPrice.toFixed(2) }} $</span
                    >
                </div>
                <button class="cart-summary__checkout__btn">checkout</button>
            </section>
        </section>
    </section>
</template>

<style scoped>
.cart {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    margin: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cart-list {
    border-radius: 15px 0 0 15px;
    width: 70%;
    padding: 30px;
}

.cart-list__item {
}

.cart-list__empty {
    padding-top: 30px;
}

.cart-list__product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0 30px 0;
    border-bottom: 1px solid gray;
}

.cart-list__product__img {
    height: 100px;
    width: 100px;
    object-fit: contain;
}

.cart-list__product__info {
    width: 50%;
}

.cart-list__product__info__title {
    text-wrap: balance;
}

.cart-list__product__info__category {
    color: gray;
}

.cart-list__product__price,
.cart-list__product__quantity {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart-list__product__btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 10px;
    height: 40px;
    width: 40px;
}

.cart-list__header,
.cart-summary__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid gray;
    padding-bottom: 30px;
}

.cart-summary {
    border-radius: 0 5px 5px 0;
    background-color: rgb(228, 228, 228);
    width: 30%;
    padding: 30px;
}

.cart-summary__item {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px 0 30px 0;
    border-bottom: 1px solid gray;
}

.cart-summary__item__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.cart-summary__item__header__title,
.cart-summary__item__header__label,
.cart-summary__item__shipping__title,
.cart-summary__item__promo__title,
.cart-summary__checkout__header__title,
.cart-summary__checkout__header__label,
.cart-list__header__title,
.cart-summary__header__title,
.cart-list__header__label,
.cart-list__product__info__title,
.cart-list__product__info__category,
.cart-list__product__price__item,
.cart-list__empty__title,
.cart-list__product__quantity__item {
    text-transform: uppercase;
    font-weight: bold;
}

.cart-summary__item__shipping {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 10px;
}

.cart-summary__item__shipping__select,
.cart-summary__item__promo__input {
    height: 30px;
    padding: 0 0 0 20px;
    border: 1px solid rgb(200, 200, 200);
    align-self: stretch;
}

.cart-summary__item__promo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 10px;
}

.cart-summary__checkout {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px 0;
}

.cart-summary__checkout__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.cart-summary__checkout__btn {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
}
</style>
