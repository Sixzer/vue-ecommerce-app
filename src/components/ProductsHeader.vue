<script setup lang="ts">
import { ref, watch } from "vue";
import { useShopStore } from "@/stores/store";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";

const shopStore = useShopStore();
const sortQuery = ref<any>("");
const searchQuery = ref<string>("");

const sortOptions = ref([
    { label: "Price high to low", value: "priceHighToLow" },
    { label: "Price low to high", value: "priceLowToHigh" },
    { label: "Rating high to low", value: "ratingHighToLow" },
    { label: "Rating low to high", value: "ratingLowToHigh" },
]);

watch(sortQuery, () => {
    shopStore.setSortQuery(sortQuery.value);
});

watch(searchQuery, () => {
    shopStore.setSearchQuery(searchQuery.value);
});
</script>

<template>
    <nav class="bg-gray-800 text-white p-3">
        <ul
            class="flex justify-content-between align-items-center gap-3 p-0 m-0 list-none"
        >
            <li class="h-3rem w-full">
                <span class="p-input-icon-left w-full h-full">
                    <i class="pi pi-search" style="top: 33%" />
                    <InputText
                        v-model="searchQuery"
                        placeholder="Search"
                        class="w-full h-full hover:border-none"
                    />
                </span>
            </li>

            <li class="h-3rem w-3">
                <Dropdown
                    v-model="sortQuery"
                    :options="sortOptions"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Sort by"
                    class="h-full w-full"
                />
            </li>
        </ul>
    </nav>
</template>

<style scoped></style>
@/stores/store
