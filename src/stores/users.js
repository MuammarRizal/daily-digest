import { ref } from 'vue'
import { defineStore } from 'pinia'
const useUserData = defineStore('Users', () => {
  const dataUsers = ref([
    {
      name: 'Muammar Rizal',
      jurusan: 'Teknik Informatika',
    },
  ])

  return { dataUsers }
})

export default useUserData
