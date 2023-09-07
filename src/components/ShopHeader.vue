<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <header class="shop-header">
        <nav class="shop-nav">
            <ul class="shop-list__left">
                <li class="shop-list__left__item">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="shop-list__left__item">
                    <RouterLink to="/products">Products</RouterLink>
                </li>
                <li class="shop-list__left__item">
                    <RouterLink class="hover" to="/about">About</RouterLink>
                </li>
            </ul>
            <ul class="shop-list__right">
                <li class="shop-list__right__item">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="{1.5}"
                        stroke="currentColor"
                        style="width: 24px; height: 24px"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </li>
                <li class="shop-list__right__item"><p>Login</p></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.shop-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 10px;
}

.shop-list__left,
.shop-list__right {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.shop-list__right__item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.shop-list__left__item a,
.shop-list__right__item svg,
.shop-list__right__item p {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease;
}

.shop-list__left__item a:hover,
.shop-list__right__item svg:hover,
.shop-list__right__item p:hover {
    color: gray;
}
</style>
