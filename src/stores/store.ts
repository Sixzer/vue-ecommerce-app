import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { type ITovar } from "@/assets/interfaces";

export const useShopStore = defineStore("shop", () => {
    const data = ref<ITovar[]>([]);
    const selectedSort = ref<string>("");
    const selectedSearch = ref<string>("");

    async function fetchDataAPI(offset: number = 20) {
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products?limit=${offset}`
            );

            data.value = response.data;
        } catch (e) {
            console.error("Ошибка", e);
        }
    }

    return { data, fetchDataAPI, selectedSort, selectedSearch };
});
