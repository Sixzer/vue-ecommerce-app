<script setup lang="ts">
import ProductsHeader from "@/components/ProductsHeader.vue";
import ProductsSection from "@/components/ProductsSection.vue";
import { ref } from "vue";

const sortMethod = ref("");

const sortMethodProps = (val: string = "") => {
    sortMethod.value = val;
};
</script>

<template>
    <ProductsHeader @upd="sortMethodProps" />
    <ProductsSection :sortMethod="sortMethod" />
</template>

<style scoped></style>
