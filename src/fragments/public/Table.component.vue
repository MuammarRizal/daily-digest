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
          <v-btn size="x-small" icon="mdi-pencil-outline" class="bg-yellow-darken-2" />
          <v-btn size="x-small" icon="mdi-information-variant" class="bg-green-darken-2" />
          <v-btn size="x-small" icon="mdi-trash-can" class="bg-red-darken-2" />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>
