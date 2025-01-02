<template>
  <div class="icon-list d-flex">
    <template v-for="({ color, icon, href }, index) in attrIcon" :key="index">
      <IconComponent :color="color" :icon="icon" :href="href" />
    </template>
  </div>
</template>

<script setup>
import IconComponent from '@/components/Icon.component.vue'
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
