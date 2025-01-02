<script setup>
import { ref } from 'vue'
import SideBar from './SideBar.fragment.vue'
import NavBar from './NavBar.fragment.vue'

const drawer = ref(true)

const onCloseDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<template>
  <!-- navbar -->
  <NavBar @openClose="onCloseDrawer" />

  <!-- sidebar -->
  <SideBar v-model="drawer" />
</template>
