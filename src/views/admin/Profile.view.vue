<template>
  <div class="icon-list d-flex">
    <template v-for="({ color, icon, href }, index) in attrIcon" :key="index">
      <IconComponent :color="color" :icon="icon" :href="href" />
    </template>

    <form @submit.prevent="tambahData">
      <label>
        name
        <input
          type="text"
          name="name"
          id="name"
          v-model="inputUser.name"
          placeholder="Masukan Nama"
        />
      </label>

      <label>
        jurusan
        <input
          type="text"
          name="jurusan"
          id="jurusan"
          v-model="inputUser.jurusan"
          placeholder="Masukan Jurusan"
        />
      </label>
      <button type="submit">Submit</button>
      <br />
    </form>

    <ul>
      <li v-for="data in dataUsers" :key="data.name">{{ data.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import IconComponent from '@/components/IconLink.component.vue'
import useUserData from '@/stores/users'

const { dataUsers, tambahData, inputUser } = useUserData()
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
