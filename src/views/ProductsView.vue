<script setup lang="ts">
import ProductsHeader from "@/components/ProductsHeader.vue";
import ProductsSection from "@/components/ProductsSection.vue";
import { ref } from "vue";

const sortMethod = ref<string>("");
const findMethod = ref<string>("");

const sortMethodProps = (val: string = "") => {
    sortMethod.value = val;
};

const findMethodProps = (val: string = "") => {
    findMethod.value = val;
};
</script>

<template>
    <ProductsHeader @sort="sortMethodProps" @find="findMethodProps" />
    <ProductsSection :sortMethod="sortMethod" :findMethod="findMethod" />
</template>

<style scoped></style>
