<script setup>
import { ref } from 'vue'
import SideBar from './layouts/SideBar.vue'
import NavBar from './layouts/NavBar.vue'
const drawer = ref(false)
const group = ref(null)

const onCloseDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <v-layout>
    <!-- navbar -->
    <NavBar @openClose="onCloseDrawer" />

    <!-- sidebar -->
    <SideBar v-model="drawer" />

    <!-- main content -->
    <v-main style="height: 500px">
      <v-card-text> Ini bagian Content </v-card-text>
    </v-main>
  </v-layout>
</template>
