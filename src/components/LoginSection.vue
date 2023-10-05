<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";
</script>

<template>
    <div class="flex justify-content-center align-items-center h-screen">
        <form class="flex flex-column gap-3 p-3 w-3 shadow-4" @submit.prevent>
            <h2 class="auth-title">Authorization</h2>

            <div class="flex flex-column gap-2">
                <label for="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="password">Password</label>
                <InputText id="password" aria-describedby="password-help" />
            </div>

            <Button label="Sign In" />
        </form>
    </div>
</template>

<style scoped></style>
