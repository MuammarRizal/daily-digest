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
      <tr v-for="(item, index) in desserts" :key="item.name">
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
import { ref } from 'vue'
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
  {
    name: 'Cupcake',
    calories: 305,
  },
  {
    name: 'Gingerbread',
    calories: 356,
  },
  {
    name: 'Jelly bean',
    calories: 375,
  },
  {
    name: 'Lollipop',
    calories: 392,
  },
  {
    name: 'Honeycomb',
    calories: 408,
  },
  {
    name: 'Donut',
    calories: 452,
  },
  {
    name: 'KitKat',
    calories: 518,
  },
])
</script>
