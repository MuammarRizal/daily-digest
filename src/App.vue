<script setup>
import { ref } from 'vue'
const drawer = ref(false)
const group = ref(null)
const items = ref([
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
])
</script>

<template>
  <v-layout>
    <!-- navbar -->
    <v-app-bar color="purple-darken-4" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Admin News</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-logout-variant" variant="text" color="red-darken-1"></v-btn>
      </template>
    </v-app-bar>

    <!-- sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      color="purple-darken-2"
    >
      <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <!-- main content -->
    <v-main style="height: 500px">
      <v-card-text> Ini bagian Content </v-card-text>
    </v-main>
  </v-layout>
</template>
