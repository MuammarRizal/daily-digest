<template>
  <v-row justify="center">
    <v-col cols="12" class="text-center d-flex justify-center align-center flex-column">
      <h2 class="mt-10">Halaman Tidak Ditemukan</h2>
      <img :src="Notfound" alt="Notfound" style="width: 80vh" class="my-10" />
      <v-btn to="/" class="bg-purple-darken-3">Kembali</v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import Notfound from '@/assets/notfound.svg'
</script>
