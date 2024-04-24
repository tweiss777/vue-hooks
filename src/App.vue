<script setup lang="ts">
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import ThemeProvider from "./contexts/ThemeProvider.vue";
</script>
<template>
    <ThemeProvider>
        <h1>Hello world</h1>
        <ThemeSwitcher />
    </ThemeProvider>
</template>

<style scoped lang="scss" src="./scss/app.scss"></style>
