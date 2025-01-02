<template>
  <v-navigation-drawer
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    color="purple-darken-2"
  >
    <ListSideBar :items="items" />
  </v-navigation-drawer>
</template>

<script setup>
import ListSideBar from '../components/ListSideBar.component.vue'
import { ref } from 'vue'

const items = ref([
  { text: 'Dashboard', icon: 'mdi-view-dashboard', pathName: 'Dashboard' },
  { text: 'Category', icon: 'mdi-view-list', pathName: 'Category' },
  { text: 'News', icon: 'mdi-newspaper-variant-outline', pathName: 'News' },
  { text: 'Profile', icon: 'mdi-account', pathName: 'Profile' },
])
</script>
