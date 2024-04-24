<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useDarkMode } from "../hooks/useDarkMode";
import Button from "./Button.vue";
const darkMode = useDarkMode();
function handleThemeChange() {
    darkMode?.setDarkMode(!darkMode.darkMode.value);
}
const isDark = computed(() => darkMode?.darkMode.value)

</script>

<template>
    <div>
        <Button @handle-event="handleThemeChange">
            <template #text>Switch colors</template>
        </Button>
        <div :class="[{'dark-mode': isDark}, 'box']">
            {{ isDark? 'dark' : 'light' }} 
        </div>

    </div>
</template>
    <style scoped lang="scss" src="./../scss/app.scss"></style>
