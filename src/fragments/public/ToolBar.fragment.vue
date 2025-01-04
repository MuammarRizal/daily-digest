<template>
  <v-toolbar app class="bg-blue-lighten-4">
    <RouterLink :to="{ name: 'LandingPage' }">
      <img :src="ImgIcon" alt="Muammar Rizal Icon" width="90" class="ms-10" />
    </RouterLink>

    <v-spacer />

    <v-toolbar-items>
      <v-btn flat v-for="item in items" :key="item.title" :to="{ name: `${item.pathName}` }">
        <v-icon left>{{ item.icon }}</v-icon>
        <span>{{ item.title }}</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup>
import ImgIcon from '@/assets/icon-mmr.jpg'
const items = [
  { title: 'Category', icon: 'mdi-newspaper', pathName: 'Category' },
  { title: 'login', icon: 'mdi-login', pathName: 'Login' },
  { title: 'Register', icon: 'mdi-account-plus', pathName: 'Register' },
]
</script>
