<template>
  <v-table theme="light">
    <thead>
      <tr>
        <th class="text-left">NO</th>
        <th class="text-left">Name</th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="item.name">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td class="d-flex justify-center ga-2 align-center">
          <v-btn
            size="x-small"
            icon="mdi-pencil-outline"
            class="bg-yellow-darken-2"
            @click="updateData(item)"
          />
          <v-btn
            size="x-small"
            icon="mdi-information-variant"
            class="bg-green-darken-2"
            @click="getDataDetail(item)"
          />
          <v-btn
            size="x-small"
            icon="mdi-trash-can"
            class="bg-red-darken-2"
            @click="deleteData(item.id)"
          />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import useCategoryStore from '@/stores/category.store'
import { storeToRefs } from 'pinia'
import { defineProps } from 'vue'

// store
const CategoryStore = useCategoryStore()

const { dialogDelete } = storeToRefs(CategoryStore)

// actions
const { getDataDetail, updateData, deleteData } = CategoryStore
defineProps({
  items: {
    required: true,
  },
})
</script>
