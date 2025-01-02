<template>
  <v-navigation-drawer
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    color="purple-darken-2"
  >
    <ListSideBar :items="items" />
  </v-navigation-drawer>
</template>

<script setup>
import ListSideBar from '../components/ListSideBar.vue'
import { ref } from 'vue'

const items = ref([
  { text: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
  { text: 'Category', icon: 'mdi-view-list', path: '/category' },
  { text: 'News', icon: 'mdi-newspaper-variant-outline', path: '/news' },
  { text: 'Profile', icon: 'mdi-account', path: '/profile' },
])
</script>
