<template>
  <v-navigation-drawer
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    color="purple-darken-2"
  >
    <ListSideBar :items="items" />
  </v-navigation-drawer>
</template>

<script setup>
import ListSideBar from './ListSideBar.vue'
import { ref } from 'vue'

const items = ref([
  { text: 'Dashboard', icon: 'mdi-view-dashboard' },
  { text: 'Category', icon: 'mdi-view-list' },
  { text: 'News', icon: 'mdi-newspaper-variant-outline' },
  { text: 'Profile', icon: 'mdi-account' },
])
</script>
