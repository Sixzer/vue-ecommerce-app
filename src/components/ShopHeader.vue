<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useShopStore } from "@/stores/store";

import Badge from "primevue/badge";

const shopStore = useShopStore();

const totalItems = computed<number>(() => {
    return shopStore.cart.reduce((acc, item) => acc + item.quantity, 0);
});
</script>

<template>
    <header>
        <nav
            class="flex justify-content-between align-items-center bg-gray-800 text-white p-3"
        >
            <ul
                class="shop-list__left list-none p-0 flex justify-content-center align-items-center gap-5"
            >
                <li>
                    <RouterLink
                        active-class="text-gray-600 font-bold"
                        class="no-underline text-white transition-colors transition-duration-300 transition-linear hover:text-gray-600"
                        to="/"
                    >
                        Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink
                        active-class="text-gray-600 font-bold"
                        class="no-underline text-white transition-colors transition-duration-300 transition-linear hover:text-gray-600"
                        to="/products"
                    >
                        Products
                    </RouterLink>
                </li>
                <li>
                    <RouterLink
                        active-class="text-gray-600 font-bold"
                        class="no-underline text-white transition-colors transition-duration-300 transition-linear hover:text-gray-600"
                        to="/about"
                    >
                        About
                    </RouterLink>
                </li>
            </ul>
            <ul
                class="shop-list__right list-none p-0 flex justify-content-center align-items-center gap-5"
            >
                <li class="flex justify-content-center align-items-center">
                    <RouterLink
                        to="/cart"
                        active-class="text-gray-600 font-bold"
                        class="no-underline text-white transition-colors transition-duration-300 transition-linear hover:text-gray-600 flex justify-content-center align-items-center"
                    >
                        <i class="pi pi-shopping-cart p-overlay-badge text-xl"
                            ><Badge
                                v-show="totalItems > 0"
                                :value="totalItems"
                                class="text-sm text-center font-bold"
                                severity="info"
                        /></i>
                    </RouterLink>
                </li>
                <li class="flex justify-content-center align-items-center">
                    <RouterLink
                        active-class="text-gray-600 font-bold"
                        class="no-underline text-white transition-colors transition-duration-300 transition-linear hover:text-gray-600"
                        to="/login"
                    >
                        Login
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>
