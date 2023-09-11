<script setup lang="ts"></script>

<template>
    <section class="about">
        <section class="about-section__info">
            <h2>Our contacts</h2>
            <p>Adress: 123 street, City</p>
            <p>Phone: +7 (123) 456-7890</p>
            <p>Email: info@example.com</p>
        </section>

        <section class="about-section__github">
            <h2 class="about-section__github__title">
                Check this repository on
            </h2>
            <a href="https://github.com/Sixzer/vue-ecommerce-app"
                ><svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="h-6 w-6 fill-slate-900"
                    style="height: 24px; width: 24px"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                    ></path></svg
            ></a>
        </section>

        <section class="about_section__form">
            <h2>Contact us</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>
    </section>
</template>

<style scoped>
.about {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.about-section__info,
.about_section__form {
    margin: 40px 0;
}

.about-section__info h2,
.about_section__form h2 {
    font-size: 24px;
    margin: 0 0 20px;
}

.about-section__info p {
    margin: 10px 0;
}

.about_section__form form {
    display: flex;
    flex-direction: column;
}

.about_section__form label {
    font-weight: bold;
    margin-bottom: 5px;
}

.about_section__form input,
.about_section__form textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.about_section__form button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
}

.footer {
    text-align: center;
    padding: 20px 0;
    background-color: #333;
    color: white;
}

.footer p {
    margin: 0;
}

.about-section__github {
    display: flex;
    gap: 10px;
}

.about-section__github a {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
