<template>
  <v-row justify="end">
    <v-btn @click="dialog = !dialog" icon="mdi-plus" class="mb-6 bg-blue-grey-darken-3" />
  </v-row>
  <DialogComponent v-model="dialog" width="50%">
    <template #title>
      <div class="title-dialog d-flex justify-space-between">
        <h3>Tambah Data</h3>
        <v-btn @click="dialog = !dialog" icon="mdi-window-close" color="red" />
      </div>
    </template>
    <template #content>
      <v-form @submit.prevent="onSubmit" v-model="form">
        <v-text-field :rules="inputRules" label="Name" v-model="category.name" />
        <v-textarea :rules="inputRules" label="Last name" v-model="category.lastname"></v-textarea>
        <v-btn width="100%" color="green" type="submit" :disabled="!form">Tambah Data</v-btn>
      </v-form>
    </template>
  </DialogComponent>
  <TableComponent :items="categoryDatas" />
</template>

<script setup>
import TableComponent from '@/fragments/public/Table.component.vue'
import DialogComponent from '@/fragments/public/Dialog.component.vue'
import useCategoryStore from '@/stores/category.store'
import { storeToRefs } from 'pinia'

// storeage
const CategoryStorage = useCategoryStore()
const { categoryDatas, category, form, dialog } = storeToRefs(CategoryStorage)

const { onSubmit } = CategoryStorage

// validation
const inputRules = [
  (value) => {
    if (value) {
      return true
    }
    return 'Inputan harus diisi'
  },
]
</script>
