<script setup lang="ts">
import { provide, ref } from "vue";
import { darkModeKey } from "./ThemeInjectionKeys";
const darkMode = ref<boolean>(false);

function setDarkMode(value: boolean): void {
    darkMode.value = value;
}

provide(darkModeKey, {
    darkMode,
    setDarkMode,
});
</script>

<template>
    <slot />
</template>
