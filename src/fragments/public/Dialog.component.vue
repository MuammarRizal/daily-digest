<template>
  <v-dialog width="100%">
    <v-card>
      <v-card-title>
        <slot name="title" />
      </v-card-title>
      <v-card-text>
        <slot name="content" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup></script>
