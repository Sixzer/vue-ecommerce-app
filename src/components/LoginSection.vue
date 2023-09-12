<script setup lang="ts"></script>

<template>
    <div class="auth-container">
        <form class="auth-form" @submit.prevent>
            <h2 class="auth-title">Authorization</h2>
            <div class="form-group__username">
                <label for="username" class="form-label">Username:</label>
                <input
                    type="text"
                    id="username"
                    class="form-input"
                    placeholder="Enter username"
                />
            </div>
            <div class="form-group__password">
                <label for="password" class="form-label">Password:</label>
                <input
                    type="password"
                    id="password"
                    class="form-input"
                    placeholder="Enter password"
                />
            </div>
            <button class="auth-button">Login</button>
        </form>
    </div>
</template>

<style scoped>
.auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.auth-form {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 300px;
    text-align: center;
}

.auth-title {
    font-size: 24px;
    margin-bottom: 20px;
}

.form-group__password,
.form-group__username {
    margin-bottom: 15px;
}

.form-label {
    font-size: 16px;
    display: block;
}

.form-input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.auth-button {
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
}

.auth-button:hover {
    background-color: gray;
}
</style>
