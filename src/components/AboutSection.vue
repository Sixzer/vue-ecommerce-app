<script setup lang="ts">
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
</script>

<template>
    <section
        class="about flex flex-column justify-content-center align-items-stretch p-4"
    >
        <section class="py-3">
            <h2 class="text-2xl mb-3">Our contacts</h2>
            <p class="my-2">Adress: 123 street, City</p>
            <p class="my-2">Phone: +7 (123) 456-7890</p>
            <p class="my-2">Email: info@example.com</p>
        </section>

        <section class="flex gap-1">
            <h2 class="text-2xl align-self-center mr-2">
                Check this repository on
            </h2>

            <a
                href="https://github.com/Sixzer/vue-ecommerce-app"
                class="card flex justify-content-center align-items-start no-underline"
            >
                <Button
                    icon="pi pi-github"
                    severity="info"
                    link
                    rounded
                    aria-label="Github"
                    style="color: black"
                    size="large"
                />
            </a>
        </section>

        <section class="flex flex-column py-3">
            <h2 class="text-2xl mb-3">Contact us</h2>
            <form class="flex flex-column gap-3">
                <div class="flex flex-column gap-2">
                    <label for="username">Username</label>
                    <InputText id="username" aria-describedby="username-help" />
                </div>

                <div class="flex flex-column gap-2">
                    <label for="email">Email</label>
                    <InputText id="email" aria-describedby="email-help" />
                </div>

                <div class="flex flex-column justify-content-start gap-2">
                    <label for="message">Message</label>
                    <Textarea id="message" rows="5" cols="30" />
                </div>

                <Button label="Submit" />
            </form>
        </section>
    </section>
</template>

<style scoped></style>
