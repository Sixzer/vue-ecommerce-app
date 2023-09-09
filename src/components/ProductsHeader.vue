<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits<{
    (e: "sort", value: string): void;
    (e: "find", value: string): void;
}>();

const selectedSort = ref<string>("");
const selectedSearch = ref<string>("");

watch(selectedSort, () => {
    emit("sort", selectedSort.value);
});

watch(selectedSearch, () => {
    emit("find", selectedSearch.value);
});
</script>

<template>
    <nav class="products-nav">
        <ul class="products-list">
            <li class="products-list__item">
                <button class="products-list__btn">
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
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                        />
                    </svg>
                </button>
            </li>
            <li class="products-list__item relative">
                <input
                    type="text"
                    class="products-list__input"
                    placeholder="Search..."
                    v-model="selectedSearch"
                />

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="{1.5}"
                    stroke="gray"
                    class="absolute"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </li>
            <li class="products-list__item">
                <select class="products-item__select" v-model="selectedSort">
                    <option disabled value="">Sort by...</option>
                    <option value="priceHighToLow">Price high to low</option>
                    <option value="priceLowToHigh">Price low to high</option>
                    <option value="ratingHighToLow">Rating high to low</option>
                    <option value="ratingLowToHigh">Rating low to high</option>
                </select>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.products-nav {
    background-color: #333;
    color: #fff;
    padding: 10px 10px;
}

.products-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
}
.relative {
    width: 100%;
    position: relative;
}
.absolute {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 7px;
    left: 10px;
}

.products-list__item {
    height: 38px;
}

.products-list__btn:hover,
.products-list__input:hover,
.products-item__select:hover {
    box-shadow: 0 0 5px rgb(255, 255, 255);
}

.products-list__btn {
    box-sizing: border-box;
    background-color: transparent;
    border: 1px solid white;
    color: #fff;

    padding: 6px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-self: center;
    align-items: center;
}

.products-list__btn:hover {
    background-color: gray;
}

.products-list__input {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 10px 0;
    padding-left: 40px;
    border: none;
    border-radius: 5px;
}

.products-item__select {
    height: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
}
</style>
