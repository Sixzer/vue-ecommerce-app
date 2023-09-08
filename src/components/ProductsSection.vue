<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { type ITovar } from "@/assets/interfaces";
import ProductsItem from "@/components/UI/ProductsItem.vue";

const productsList = ref<ITovar[]>();
const props = defineProps<{ sortMethod: string }>();

watch(props, () => {
    switch (props.sortMethod) {
        case "highToLow":
            productsList.value = productsList.value?.sort(
                (a, b) => +b.price - +a.price
            );
            break;
        case "lowToHigh":
            productsList.value = productsList.value?.sort(
                (a, b) => +a.price - +b.price
            );
            break;
        default:
            break;
    }
});

onMounted(() => fetchUsers());

const fetchUsers = async () => {
    try {
        const response = await axios.get(
            "https://fakestoreapi.com/products?limit=20"
        );

        productsList.value = response.data;
    } catch (error) {
        console.log(error);
    }
};
</script>

<template>
    <section class="products">
        <ul class="products-list">
            <ProductsItem
                :product="product"
                v-for="product in productsList"
                :key="product.id"
            />
        </ul>
    </section>
</template>

<style scoped>
.products-list {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 280px);
    justify-content: space-between;
    row-gap: 20px;
}
</style>
