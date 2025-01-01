<script setup>
import { ref } from 'vue'
import SideBar from '../fragments/SideBar.vue'
import NavBar from '../fragments/NavBar.vue'

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
