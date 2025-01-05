import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '@/config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'vue-router'

export const useAuthStores = defineStore('Auth', () => {
  const formInput = ref(false)
  const router = useRouter()

  const userCollection = collection(db, 'users')
  const user = reactive({
    name: '',
    email: '',
    password: '',
  })

  const authUser = async () => {
    const data = await createUserWithEmailAndPassword(auth, user.email, user.password)

    await addDoc(userCollection, {
      name: user.name,
      email: user.email,
      uid: data.user.uid,
      isAdmin: false,
    })

    router.push({ name: 'Dashboard' })
  }

  return {
    formInput,
    user,
    authUser,
  }
})
