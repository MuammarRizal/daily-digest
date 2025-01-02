<template>
  <v-app>
    <!-- Header -->
    <ToolBarFragment />

    <!-- Main -->
    <v-container style="min-height: 70vh" class="my-10">
      <RouterView />
    </v-container>

    <!-- Footer -->
    <FooterFragment />
  </v-app>
</template>

<script setup>
import FooterFragment from '@/fragments/public/Footer.fragment.vue'
import ToolBarFragment from '@/fragments/public/ToolBar.fragment.vue'
</script>
