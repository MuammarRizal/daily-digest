<template>
  <v-row justify="end">
    <v-btn @click="clearInput" icon="mdi-plus" class="mb-6 bg-blue-grey-darken-3" />
  </v-row>

  <!-- Dialog -->
  <DialogComponent v-model="dialog" width="50%">
    <template #title>
      <div class="title-dialog d-flex justify-space-between">
        <h3>{{ !categoryInput.isUpdate ? 'Tambah Data' : 'Update Data' }}</h3>
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
          >{{ !categoryInput.isUpdate ? 'Tambah' : 'Update' }}</v-btn
        >
      </v-form>
    </template>
  </DialogComponent>

  <!-- Detail Dialog -->
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

  <!-- Delete Dialog -->
  <DialogComponent v-model="dialogDelete" width="50%">
    <template #title>
      <h2>Hapus Data</h2>
    </template>
    <template #content>
      Yakin ingin menghapus Data ?
      <v-row>
        <v-col class="d-flex ga-2 justify-end mt-5">
          <v-btn color="red" @click="dialogDelete = false">Tidak</v-btn>
          <v-btn color="green" @click="destroyData(categoryInput.id)">Ya</v-btn>
        </v-col>
      </v-row>
    </template>
  </DialogComponent>
  <TableComponent :items="CategoryDatas" />
</template>

<script setup>
import TableComponent from '@/fragments/public/Table.component.vue'
import DialogComponent from '@/fragments/public/Dialog.component.vue'
import useCategoryStore from '@/stores/category/category.store'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

// storage
const CategoryStorage = useCategoryStore()

// state
const { CategoryDatas, categoryInput, form, dialog, isLoading, dialogDetail, dialogDelete } =
  storeToRefs(CategoryStorage)

// actions
const { onSubmit, snapDocs, clearInput, deleteData, destroyData } = CategoryStorage

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
