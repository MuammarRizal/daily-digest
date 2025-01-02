<template>
  <v-app-bar color="purple-darken-4" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="$emit('openClose')"></v-app-bar-nav-icon>

    <v-toolbar-title>Admin News</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="$vuetify.display.mdAndUp">
      <v-btn icon="mdi-logout-variant" variant="text" color="red-darken-1"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
defineEmits(['openClose'])
</script>
