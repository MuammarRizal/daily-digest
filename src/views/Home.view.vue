<script setup>
import { provide } from 'vue'
import Header from '../layouts/Header.layout.vue'
import Content from '../layouts/Content.layout.vue'

provide('username', 'Muammar Rizal')
</script>

<template>
  <v-layout>
    <!-- header -->
    <Header />

    <!-- main content -->
    <Content />
  </v-layout>
</template>
