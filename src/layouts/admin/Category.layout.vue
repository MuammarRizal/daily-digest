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
  <TableComponent :items="desserts" />
</template>

<script setup>
import { reactive, ref } from 'vue'
import TableComponent from '@/fragments/public/Table.component.vue'
import DialogComponent from '@/fragments/public/Dialog.component.vue'
const dialog = ref(false)
const form = ref(false)

const desserts = ref([
  {
    name: 'Frozen Yogurt',
    calories: 159,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
  },
  {
    name: 'Eclair',
    calories: 262,
  },
])
const category = reactive({
  name: '',
  lastname: '',
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

const clearInput = () => {
  category.name = ''
  category.lastname = ''
}

const onSubmit = () => {
  if (!form) return
  desserts.value.push({
    name: category.name,
    colories: category.lastname,
  })

  clearInput()
  dialog.value = !dialog.value
}
</script>
