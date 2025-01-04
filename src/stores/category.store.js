import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from 'firebase/firestore'
import { db } from '@/config/firebase.config'

const useCategoryStore = defineStore('Category', () => {
  const CategoryCollection = collection(db, 'categories')
  const dialog = ref(false)
  const form = ref(false)
  const isLoading = ref(false)
  const CategoryDatas = ref(null)
  const dialogDetail = ref(false)
  const dialogDelete = ref(false)

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
    categoryInput.id = item.id
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
      console.log(categoryInput)
      if (categoryInput.isUpdate) {
        await updateDoc(doc(CategoryCollection, categoryInput.id), {
          name: categoryInput.name,
          description: categoryInput.description,
        })
      } else {
        await addDoc(CategoryCollection, {
          name: categoryInput.name,
          description: categoryInput.description,
        })
      }
      clearInput()
      dialog.value = false
      snapDocs()
    } catch (error) {
      alert('Error : ', error.message)
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  const deleteData = (id) => {
    dialogDelete.value = true
    categoryInput.id = id
  }

  const destroyData = async (id) => {
    await deleteDoc(doc(CategoryCollection, id))
    categoryInput.id = ''
    dialogDelete.value = false
    snapDocs()
  }
  const snapDocs = async () => {
    const querySnapshot = await getDocs(CategoryCollection)
    CategoryDatas.value = querySnapshot.docs.map((doc) => {
      // doc.data() is never undefined for query doc snapshots
      return { id: doc.id, ...doc.data() }
      // console.log(doc.id, '=>', doc.data())
    })
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
    dialogDelete,
    deleteData,
    destroyData,
  }
})

export default useCategoryStore
