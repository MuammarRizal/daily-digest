<template>
  <v-layout>
    <!-- header -->
    <HeaderLayout />
    <!-- main content -->
    <ContentLayout />
  </v-layout>
</template>

<script setup>
import { provide } from 'vue'
import ContentLayout from '../../fragments/admin/Content.fragment.vue'
import HeaderLayout from '../../fragments/admin/Header.fragment.vue'
provide('username', 'Muammar Rizal')
</script>
