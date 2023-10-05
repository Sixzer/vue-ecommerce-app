<script setup lang="ts">
import type { ICartProduct } from "@/assets/interfaces";
import { computed, onMounted, ref, watch } from "vue";
import { useShopStore } from "@/stores/store";

import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";

const cartList = ref<ICartProduct[]>([]);
const shopStore = useShopStore();
const price = ref<number>(0);
const shippingPrice = ref<string>("");
const totalPrice = ref<number>(0);
const totalItems = computed<number>(() => {
    return cartList.value.reduce((acc, item) => acc + item.quantity, 0);
});
const deliveryOptions = ref([
    { label: "Pickup Point + 0$", value: "0" },
    { label: "Standart Delivery + 5$", value: "5" },
    { label: "Extra Delivery + 10$", value: "10" },
]);

const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } =
    shopStore;

onMounted(() => {
    cartList.value = shopStore.cart;
});

watch(
    () => shopStore.cart,
    () => {
        cartList.value = shopStore.cart;
    }
);

watch(
    cartList,
    () => {
        price.value = cartList.value.reduce(
            (acc, val) => (acc += val.price * val.quantity),
            0
        );
    },
    { deep: true }
);

watch([shippingPrice, price], () => {
    totalPrice.value = +shippingPrice.value + price.value;
});
</script>

<template>
    <section
        class="cart flex align-items-stretch justify-content-between m-4 border-round-md border-gray-200 shadow-5"
    >
        <section class="w-8 p-4">
            <article class="flex justify-content-between align-items-end pb-5">
                <h2 class="font-bold uppercase">Shopping cart</h2>
                <span class="font-bold uppercase">{{ totalItems }} items</span>
            </article>

            <Divider />

            <section class="" v-if="cartList.length > 0">
                <section class="" v-for="product in cartList">
                    <section
                        class="flex justify-content-between align-items-center py-5"
                    >
                        <img
                            class="w-1 h-6rem"
                            style="object-fit: contain"
                            :src="product.image"
                            alt="img"
                        />
                        <div class="w-6">
                            <div
                                class="uppercase font-bold"
                                style="text-wrap: balance"
                            >
                                {{ product.title }}
                            </div>
                            <div class="text-500 uppercase font-bold">
                                {{ product.category }}
                            </div>
                        </div>

                        <div
                            class="flex justify-content-center align-items-center"
                        >
                            <Button
                                @click="decreaseItemQuantity(product.id)"
                                icon="pi pi-minus"
                                severity="secondary"
                                text
                                rounded
                                aria-label="minus"
                            />
                            <span class="px-3 font-bold uppercase">
                                {{ product.quantity }}</span
                            >

                            <Button
                                @click="increaseItemQuantity(product.id)"
                                icon="pi pi-plus"
                                severity="secondary"
                                text
                                rounded
                                aria-label="plus"
                            />
                        </div>

                        <div
                            class="flex justify-content-center align-items-center w-1"
                        >
                            <span class="uppercase font-bold"
                                >{{ product.price }} $</span
                            >
                        </div>

                        <Button
                            @click="removeItemFromCart(product.id)"
                            icon="pi pi-trash"
                            severity="secondary"
                            text
                            rounded
                            aria-label="trash"
                        />
                    </section>
                    <Divider />
                </section>
            </section>
            <section v-else class="pt-3">
                <h3 class="font-bold uppercase">Cart is empty</h3>
            </section>
        </section>
        <section class="w-4 p-4 border-round-right">
            <article class="flex justify-content-between align-items-end pb-5">
                <h2 class="font-bold uppercase">Summary</h2>
            </article>

            <Divider />

            <section class="flex flex-column gap-4 py-5">
                <div class="flex justify-content-between align-items-end">
                    <h3 class="font-bold uppercase">items {{ totalItems }}</h3>
                    <div class="font-bold uppercase">
                        {{ price.toFixed(2) }} $
                    </div>
                </div>

                <div class="card flex flex-column gap-2 w-full">
                    <h3 class="font-bold uppercase">shipping</h3>
                    <Dropdown
                        v-model="shippingPrice"
                        :options="deliveryOptions"
                        optionLabel="label"
                        optionValue="value"
                        placeholder="Choose delivery method"
                        class="w-full"
                    />
                </div>

                <div class="flex flex-column gap-2">
                    <h3 for="promo" class="font-bold uppercase">promo</h3>
                    <InputText
                        id="promo"
                        aria-describedby="promo-help"
                        placeholder="Enter promocode"
                    />
                </div>
            </section>

            <Divider />

            <section class="flex flex-column gap-4 py-4">
                <div class="flex justify-content-between align-items-end">
                    <h3 class="font-bold uppercase">total price</h3>
                    <span class="font-bold uppercase"
                        >{{ totalPrice.toFixed(2) }} $</span
                    >
                </div>
                <Button label="CHECKOUT" />
            </section>
        </section>
    </section>
</template>

<style scoped></style>
