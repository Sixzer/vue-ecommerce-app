<script setup lang="ts">
const props = defineProps<{ find: string }>();
</script>

<template>
    <section class="noResults">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            style="width: 100px; height: 100px"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
        </svg>

        <h2 class="noResults-title">
            Ничего не нашли по запросу «{{ props.find }}»
        </h2>
        <p class="noResults-desc">
            Попробуйте поискать по-другому или сократить запрос.
        </p>
    </section>
</template>

<style scoped>
.noResults {
    text-align: center;
    margin: 20px;
}

.noResults-title {
    font-weight: bold;
    font-size: 24px;
    margin: 10px 0;
}
</style>
