import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/config/firebase.config'

const useCategoryStore = defineStore('Category', () => {
  const CategoryCollection = collection(db, 'categories')
  const dialog = ref(false)
  const form = ref(false)

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
    if (!form) return
    categoryDatas.value.push({
      name: categoryInput.name,
      colories: categoryInput.description,
    })

    await addDoc(CategoryCollection, {
      name: categoryInput.name,
      description: categoryInput.description,
    })
    clearInput()
    dialog.value = !dialog.value
  }
  return { categoryDatas, dialog, form, onSubmit, category: categoryInput }
})

export default useCategoryStore
