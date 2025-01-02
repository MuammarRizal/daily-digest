import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
const useUserData = defineStore('Users', () => {
  const dataUsers = ref([
    {
      name: 'Muammar Rizal',
      jurusan: 'Teknik Informatika',
    },
  ])

  const inputUser = reactive({
    name: '',
    jurusan: '',
  })

  const clearInput = () => {
    inputUser.name = ''
    inputUser.jurusan = ''
  }

  const tambahData = () => {
    dataUsers.value.push({
      name: inputUser.name,
      jurusan: inputUser.jurusan,
    })

    clearInput()
  }

  const JumlahData = computed(() => dataUsers.value.length)

  return { dataUsers, tambahData, inputUser, JumlahData }
})

export default useUserData
