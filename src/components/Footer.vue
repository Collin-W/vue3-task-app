<template>
    <footer>
        <p>Made with Vue3 2022 🖖</p>
        <!-- this allows to automatically load page instead of a refresh -->
        <router-link to="/about">About</router-link>
        <br>
        <router-link to="/history">History</router-link>
    </footer>
</template>

<style scoped>
    a {
        color: #333
    }
    footer {
        margin-top: 30px;
        text-align: center;
    }
</style>