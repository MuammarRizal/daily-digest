<template>
  <div>
    <v-img class="mx-auto" max-width="228" :src="IconImg"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <v-form v-model="formInput" @submit.prevent="authUser">
        <div class="text-subtitle-1 text-medium-emphasis">Username</div>

        <v-text-field
          density="compact"
          placeholder="Username"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
          :rules="nameRules"
          v-model="user.name"
        ></v-text-field>
        <div class="text-subtitle-1 text-medium-emphasis">Email</div>

        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          :rules="emailRules"
          v-model="user.email"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <router-link
            v-if="login"
            class="text-caption text-decoration-none text-blue"
            to="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</router-link
          >
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          :rules="[passwordRules.required, passwordRules.min]"
          v-model="user.password"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <!-- <template v-if="!login">
          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
          >
            Confirm Password
          </div>
          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            :rules="passwordRules"
            density="compact"
            placeholder="Confirm your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>
        </template> -->

        <v-btn
          :disabled="!formInput"
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          type="submit"
        >
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
      </v-form>
    </v-card>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import IconImg from '@/assets/icon-mmr.jpg'
import { useAuthStores } from '@/stores/auth/auth.store'
import { storeToRefs } from 'pinia'

defineProps({
  login: {
    type: Boolean,
    required: true,
    default: true,
  },
})

const visible = ref(false)

// store
const authStore = useAuthStores()

//  state
const { formInput, user } = storeToRefs(authStore)

// action
const { authUser } = authStore

// validation
const nameRules = [
  (value) => {
    if (value) return true
    return 'Name Harus diisi'
  },
]

const emailRules = [
  (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
]

const passwordRules = {
  required: (value) => !!value || `Password harus di isi`,
  min: (value) => value.length >= 6 || 'Password minimal 6 karakter',
}
</script>
