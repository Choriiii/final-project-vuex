import { defineStore } from 'pinia'
import { useQuizStore } from '@/store/QuizStore.js'

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
}),
  actions: {
   login(userData){
    this.userId = userData.userId
    this.firstName = userData.firstName
    this.lastName = userData.lastName
    this.email = userData.email
    this.phone = userData.phone

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
      this.$patch(JSON.parse(savedUser))
    }
   },
   logout(){
    // Save progressing quiz data to local storage
    const quizStore = useQuizStore()
    quizStore.saveIfInProgress()
    localStorage.removeItem('quizStore')

    this.$reset()
    localStorage.removeItem('user')
   }
  },
  getters: {
    isLogin(state) {
      return state && state.userId
    }
  },
  persist: true,
})