<script setup lang="ts">
const props = defineProps<{ search: string }>();
</script>

<template>
    <section
        class="noResults flex flex-column justify-content-center align-items-center m-4"
    >
        <i class="pi pi-exclamation-triangle" style="font-size: 6rem"></i>

        <h2 class="font-bold text-lg my-2">
            No results for «{{ props.search }}»
        </h2>
        <p>Try checking your spelling or use more general terms</p>
    </section>
</template>

<style scoped></style>
