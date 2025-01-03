import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

const useCategoryStore = defineStore('Category', () => {
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
    lastname: '',
  })

  const clearInput = () => {
    categoryInput.name = ''
    categoryInput.lastname = ''
  }

  const onSubmit = () => {
    if (!form) return
    categoryDatas.value.push({
      name: categoryInput.name,
      colories: categoryInput.lastname,
    })

    clearInput()
    dialog.value = !dialog.value
  }
  return { categoryDatas, dialog, form, onSubmit, category: categoryInput }
})

export default useCategoryStore
