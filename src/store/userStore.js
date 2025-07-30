import { defineStore } from 'pinia'
import { useQuizStore } from '@/store/QuizStore.js'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
   login(userData){
    this.user = userData
    localStorage.setItem('user', JSON.stringify(userData))

    // load or make user's quizStore
    const quizStore = useQuizStore()

    const saved = localStorage.getItem(`quiz_${userData.userId}`)
    // if progressing user's quiz data exists, load from localstorage
    if ( saved ) {
      quizStore.loadFromLocal(saved)
    } else {
      quizStore.$reset()
      quizStore.userId = userData.userId
    }
   },
   loadUser(){
    const savedUser =localStorage.getItem('user')
    if (savedUser) {
        this.user =JSON.parse(savedUser)
    }
   },
   logout(){
    // Save progressing quiz data to local storage
    const quizStore = useQuizStore()
    quizStore.saveIfInProgress()
    localStorage.removeItem('quizStore')

    this.user = null
    localStorage.removeItem('user')
   }
  }
})