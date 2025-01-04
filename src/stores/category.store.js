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
  const dialogDetail = ref(false)

  const categoryInput = reactive({
    id: '',
    name: '',
    description: '',
    isUpdate: false,
  })

  const clearInput = () => {
    categoryInput.isUpdate = false
    dialog.value = true
    categoryInput.name = ''
    categoryInput.description = ''
  }

  const updateData = (item) => {
    categoryInput.isUpdate = true
    dialog.value = true
    categoryInput.name = item.name
    categoryInput.description = item.description
  }

  const getDataDetail = (item) => {
    dialogDetail.value = true
    categoryInput.name = item.name
    categoryInput.description = item.description
  }

  const onSubmit = async () => {
    isLoading.value = true
    if (!form) return
    CategoryDatas.value.push({
      name: categoryInput.name,
      description: categoryInput.description,
    })

    try {
      await addDoc(CategoryCollection, {
        name: categoryInput.name,
        description: categoryInput.description,
      })
      clearInput()
      dialog.value = false
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
      CategoryDatas.value.push({ ...doc.data(), id: doc.id })
    })

    console.log(CategoryDatas)
  }
  return {
    CategoryDatas,
    dialog,
    form,
    onSubmit,
    categoryInput,
    isLoading,
    snapDocs,
    getDataDetail,
    dialogDetail,
    clearInput,
    updateData,
  }
})

export default useCategoryStore
