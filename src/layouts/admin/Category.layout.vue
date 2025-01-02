<template>
  <v-row justify="end">
    <v-btn @click="dialog = !dialog" icon="mdi-plus" class="mb-6 bg-blue-grey-darken-3" />
  </v-row>
  <DialogComponent v-model="dialog" />
  <TableComponent />
</template>

<script setup>
import { reactive, ref } from 'vue'
import TableComponent from '@/fragments/public/Table.component.vue'
import DialogComponent from '@/fragments/public/Dialog.component.vue'
const dialog = ref(false)
</script>
