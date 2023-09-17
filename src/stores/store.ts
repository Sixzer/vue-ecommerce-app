import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { type IProduct } from "@/assets/interfaces";

export const useShopStore = defineStore("shop", () => {
    const products = ref<IProduct[]>([]);
    const sortQuery = ref<string>("");
    const searchQuery = ref<string>("");
    const productId = ref<number>(0);

    async function getAllProducts(offset: number): Promise<void> {
        const { data } = await axios.get<IProduct[]>(
            `https://fakestoreapi.com/products?limit=${offset}`
        );

        products.value = data;
    }

    async function getFeaturedProducts(
        offset: number = 20
    ): Promise<IProduct[]> {
        const { data } = await axios.get<IProduct[]>(
            `https://fakestoreapi.com/products?limit=${offset}`
        );

        return data
            .sort((item1, item2) => item2.rating.rate - item1.rating.rate)
            .slice(0, 5);
    }

    async function getSingleProduct(id: number): Promise<IProduct> {
        const { data } = await axios.get<IProduct>(
            `https://fakestoreapi.com/products/${id}`
        );

        return data;
    }

    function setSearchQuery(query: string): void {
        searchQuery.value = query;
    }

    function setSortQuery(query: string): void {
        sortQuery.value = query;
    }

    function setProductId(id: number): void {
        productId.value = id;
    }

    return {
        products,
        productId,
        sortQuery,
        searchQuery,
        getAllProducts,
        getFeaturedProducts,
        getSingleProduct,
        setSearchQuery,
        setSortQuery,
        setProductId,
    };
});
