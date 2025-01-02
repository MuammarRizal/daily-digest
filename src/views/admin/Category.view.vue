<template>
  <v-container>
    <!-- <v-list-item :to="{ name: 'category-list', params: { name: 'politik' } }">Politik</v-list-item>
    <v-list-item :to="{ name: 'category-list', params: { name: 'IT' } }">IT</v-list-item>
    <v-list-item :to="{ name: 'category-list', params: { name: 'Budaya' } }">Budaya</v-list-item> -->
    <CategoryLayout />
  </v-container>
</template>

<script setup>
import CategoryLayout from '@/layouts/admin/Category.layout.vue'
</script>
