<script setup lang="ts"></script>

<template>
    <div class="about">
        <section class="about-section__info">
            <h2>Our contacts</h2>
            <p>Adress: 123 street, City</p>
            <p>Phone: +7 (123) 456-7890</p>
            <p>Email: info@example.com</p>
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
    </div>
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
</style>
