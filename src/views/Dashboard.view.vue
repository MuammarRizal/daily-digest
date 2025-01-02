<script setup>
import { ref } from 'vue'
import AlertMessage from '../components/AlertMessage.vue'

const group = ref(null)
const showError = ref(false)
const showMotivation = ref(false)
</script>

<template>
  <v-btn @click="showMotivation = !showMotivation" type="button">Show Motivation</v-btn>
  <v-btn @click="showError = !showError" type="button">Show Error</v-btn>
  <AlertMessage v-model="showMotivation" :typeValue="'success'">
    <template #title>
      <h6>Message Alert</h6>
    </template>

    <template #content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At laboriosam quas vel autem nulla
      consequuntur vero nemo quo distinctio dicta.
    </template>
  </AlertMessage>

  <AlertMessage v-model="showError" :typeValue="'error'">
    <template #title>
      <h6>Error Alert</h6>
    </template>
    <template #content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At laboriosam quas vel autem nulla
      consequuntur vero nemo quo distinctio dicta.
    </template>
  </AlertMessage>
</template>
