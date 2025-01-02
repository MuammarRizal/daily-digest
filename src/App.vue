<script setup>
import { provide } from 'vue'
import ContentLayout from './layouts/Content.layout.vue'
import HeaderLayout from './layouts/Header.layout.vue'
provide('username', 'Muammar Rizal')
</script>

<template>
  <v-layout>
    <!-- header -->
    <HeaderLayout />
    <!-- main content -->
    <ContentLayout />
  </v-layout>
</template>
