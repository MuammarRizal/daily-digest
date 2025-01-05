<template>
  <AuthFragment :login="Login" />
</template>

<script setup>
import AuthFragment from '@/fragments/auth/auth.fragment.vue'
import { ref } from 'vue'

const Login = ref(true)
</script>
