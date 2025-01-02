<template>
  <v-list density="compact">
    <v-list-subheader class="my-3 text-h5 text-blue-grey-lighten-5">{{
      username
    }}</v-list-subheader>

    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      color="primary"
      :to="{ name: `${item.pathName}` }"
      class="text-decoration-none text-white"
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title>{{ item.text }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { inject, defineProps } from 'vue'

const username = inject('username')

defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>
