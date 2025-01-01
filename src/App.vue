<script setup>
import { ref } from 'vue'
import SideBar from './components/SideBar.vue'
const drawer = ref(false)
const group = ref(null)
</script>

<template>
  <v-layout>
    <!-- navbar -->
    <v-app-bar color="purple-darken-4" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Admin News</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-logout-variant" variant="text" color="red-darken-1"></v-btn>
      </template>
    </v-app-bar>

    <!-- sidebar -->
    <SideBar v-model="drawer" />

    <!-- main content -->
    <v-main style="height: 500px">
      <v-card-text> Ini bagian Content </v-card-text>
    </v-main>
  </v-layout>
</template>
