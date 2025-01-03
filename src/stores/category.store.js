import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/config/firebase.config'

const useCategoryStore = defineStore('Category', () => {
  const CategoryCollection = collection(db, 'categories')
  const dialog = ref(false)
  const form = ref(false)
  const isLoading = ref(false)

  const categoryDatas = ref([
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
  ])

  const categoryInput = reactive({
    name: '',
    description: '',
  })

  const clearInput = () => {
    categoryInput.name = ''
    categoryInput.description = ''
  }

  const onSubmit = async () => {
    isLoading.value = true
    if (!form) return
    categoryDatas.value.push({
      name: categoryInput.name,
      colories: categoryInput.description,
    })

    try {
      await addDoc(CategoryCollection, {
        name: categoryInput.name,
        description: categoryInput.description,
      })
      clearInput()
      dialog.value = !dialog.value
    } catch (error) {
      alert('Error : ', error.message)
    } finally {
      isLoading.value = false
    }
  }
  return { categoryDatas, dialog, form, onSubmit, category: categoryInput, isLoading }
})

export default useCategoryStore
