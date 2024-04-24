<script setup lang="ts">
const emit = defineEmits<{ (e: "handleEvent"): void }>();


function onClick() {
  emit("handleEvent");
}
</script>

<template>
  <button @click="onClick">
        <slot name="text">Click me</slot>
  </button>
</template>
