import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { addDoc, collection, getDocs, query } from 'firebase/firestore'
import { db } from '@/config/firebase.config'

const useCategoryStore = defineStore('Category', () => {
  const CategoryCollection = collection(db, 'categories')
  const dialog = ref(false)
  const form = ref(false)
  const isLoading = ref(false)
  const CategoryDatas = ref([])

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

  const snapDocs = async () => {
    const q = query(CategoryCollection)

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      CategoryDatas.value.push(doc.data())
    })

    console.log(CategoryDatas)
  }
  return { CategoryDatas, dialog, form, onSubmit, categoryInput, isLoading, snapDocs }
})

export default useCategoryStore
