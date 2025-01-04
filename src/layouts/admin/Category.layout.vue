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
        <v-text-field :rules="inputRules" label="Name" v-model="categoryInput.name" />
        <v-textarea
          :rules="inputRules"
          label="Description"
          v-model="categoryInput.description"
        ></v-textarea>

        <v-btn
          width="100%"
          :color="isLoading ? 'red' : 'green'"
          type="submit"
          :disabled="!form || isLoading"
          >{{ isLoading ? 'Loading ...' : 'Tambah Data' }}</v-btn
        >
      </v-form>
    </template>
  </DialogComponent>

  <DialogComponent v-model="dialogDetail" width="50%">
    <template #title>
      <div class="title-dialog d-flex justify-space-between">
        <h3>{{ categoryInput.name }}</h3>
        <v-btn @click="dialogDetail = !dialogDetail" icon="mdi-window-close" color="red" />
      </div>
    </template>
    <template #content>
      <p>{{ categoryInput.description }}</p>
    </template>
  </DialogComponent>
  <TableComponent :items="CategoryDatas" />
</template>

<script setup>
import TableComponent from '@/fragments/public/Table.component.vue'
import DialogComponent from '@/fragments/public/Dialog.component.vue'
import useCategoryStore from '@/stores/category.store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

// storage
const CategoryStorage = useCategoryStore()

// state
const { CategoryDatas, categoryInput, form, dialog, isLoading, dialogDetail } =
  storeToRefs(CategoryStorage)

// actions
const { onSubmit, snapDocs } = CategoryStorage

onMounted(() => {
  snapDocs()
})

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
