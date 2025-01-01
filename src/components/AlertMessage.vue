<template>
  <v-alert :type="typeValue" variant="tonal" close-label="Close Alert" closable>
    <slot name="title" />
    <slot name="content" />
  </v-alert>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  typeValue: {
    type: String,
    required: true,
  },
})
</script>
