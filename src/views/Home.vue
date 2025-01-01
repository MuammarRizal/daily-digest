<script setup>
import { ref, provide } from 'vue'
import SideBar from '../layouts/SideBar.vue'
import NavBar from '../layouts/NavBar.vue'
import AlertMessage from '../components/AlertMessage.vue'

provide('username', 'Muammar Rizal')

const drawer = ref(false)
const group = ref(null)
const showError = ref(false)
const showMotivation = ref(false)

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
      <v-btn @click="showMotivation = !showMotivation" type="button">Show Motivation</v-btn>
      <v-btn @click="showError = !showError" type="button">Show Error</v-btn>
      <AlertMessage v-model="showMotivation" :typeValue="'success'">
        <template #title>
          <h6>Message Alert</h6>
        </template>
        <template #content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At laboriosam quas vel autem
          nulla consequuntur vero nemo quo distinctio dicta.
        </template>
      </AlertMessage>
      <AlertMessage v-model="showError" :typeValue="'error'">
        <template #title>
          <h6>Error Alert</h6>
        </template>
        <template #content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At laboriosam quas vel autem
          nulla consequuntur vero nemo quo distinctio dicta.
        </template>
      </AlertMessage>
    </v-main>
  </v-layout>
</template>
