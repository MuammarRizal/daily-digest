<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const backToCategory = () => {
  router.push({ name: 'Category' })
}
</script>

<template>
  <h2>Halaman detail {{ $route.params.name }}</h2>

  <v-btn @click="backToCategory">Kembali</v-btn>
</template>
