import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
   login(userData){
    this.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
   },
   loadUser(){
    const savedUser =localStorage.getItem('user')
    if (savedUser) {
        this.user =JSON.parse(savedUser)
    }
   },
   logout(){
    this.user = null
    localStorage.removeItem('user')
   }
  }
})