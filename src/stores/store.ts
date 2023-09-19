import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { type IProduct, type ICartProduct } from "@/assets/interfaces";

export const useShopStore = defineStore("shop", () => {
    const products = ref<IProduct[]>([]);
    const sortQuery = ref<string>("");
    const searchQuery = ref<string>("");
    const productId = ref<number>(0);
    const cart = ref<ICartProduct[]>([]);

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

    function addItemToCart(id: number): void {
        if (cart.value.find((product) => product.id === id)) {
            let item = cart.value.find((product) => product.id === id);

            if (typeof item !== "undefined") {
                item.quantity += 1;
            }
        } else {
            const item = products.value.find((product) => product.id === id);
            if (typeof item !== "undefined") {
                cart.value.push({ ...item, quantity: 1 });
                console.log(cart.value);
            }
        }
        // localStorage.setItem("cart", JSON.stringify(cart.value));
    }

    function removeItemFromCart(id: number): void {
        const filteredCart = cart.value.filter((product) => product.id !== id);

        cart.value = filteredCart;

        // localStorage.setItem("cart", JSON.stringify(cart.value));
    }

    return {
        products,
        productId,
        cart,
        sortQuery,
        searchQuery,
        getAllProducts,
        getFeaturedProducts,
        getSingleProduct,
        setSearchQuery,
        setSortQuery,
        setProductId,
        addItemToCart,
        removeItemFromCart,
    };
});
