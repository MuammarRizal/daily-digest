<template>
  <div class="icon-list d-flex">
    <template v-for="({ color, icon, href }, index) in attrIcon" :key="index">
      <IconComponent :color="color" :icon="icon" :href="href" />
    </template>

    <ul>
      <li v-for="data in dataUsers" :key="data.name">{{ data.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import IconComponent from '@/components/IconLink.component.vue'
import useUserData from '@/stores/users'

const { dataUsers } = useUserData()
const attrIcon = [
  {
    color: 'error',
    icon: 'mdi-youtube',
    href: 'https://youtube.com',
  },
  {
    icon: 'mdi-linkedin',
    href: 'https://linkedin.com',
  },
  {
    icon: 'mdi-github',
    href: 'https://github.com',
  },
]
</script>
