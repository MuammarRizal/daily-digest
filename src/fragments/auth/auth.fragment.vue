<template>
  <div>
    <v-img class="mx-auto" max-width="228" :src="IconImg"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          v-if="login"
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a
        >
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <template v-if="!login">
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Confirm Password
        </div>
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Confirm your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
      </template>

      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
        {{ login ? 'Log In' : 'Register' }}
      </v-btn>

      <v-card-text class="text-center">
        <router-link
          class="text-blue text-decoration-none"
          rel="noopener noreferrer"
          target="_blank"
          :to="{ name: 'Register' }"
          v-if="login"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import IconImg from '@/assets/icon-mmr.jpg'

defineProps({
  login: {
    type: Boolean,
    required: true,
    default: true,
  },
})

const visible = ref(false)
</script>
