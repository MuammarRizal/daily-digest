<template>
  <v-btn size="large" :icon="icon" :color="color" target="_blank" :href="href" />
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    default: 'success',
  },
  href: {
    type: String,
    required: true,
  },
})
</script>
