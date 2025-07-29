<template>
  <div>
    <div v-if="!user" id="main-div">
      <h2>Complete your profile</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="userId">User ID:</label>
          <input type="text" id="userId" v-model="form.userId" required>
        </div>
        
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="form.firstName" required>
        </div>
        
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="form.lastName" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        
        <div class="form-group">
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" v-model="form.phone">
        </div>
        
        <button type="submit">Save Changes</button>
      </form>
    </div>

    <div v-else id="main-div">
      <img src="../assets/Avatar.svg" alt="Avatar">
      <h2 id="user-ID">{{ user.userId }}</h2>
      <p id="f-name">{{ user.firstName }}</p>
      <p id="l-name">{{ user.lastName }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.phone }}</p>
      
      <button @click="logout">Log out</button>
      <router-link to="/" class="Home-link">
        <button>Home Page</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore'


export default {
  name: 'ProfileCompo',
  
  data() {
    return{
    form:{
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
        }
    }
  },
  
  computed: {
  user() {
    return useUserStore().user
  }
},
  
  methods: {
    handleSubmit(){
        useUserStore().login(this.form)
        this.form ={
            userId: '',
            firstName: '',
            lastName:'',
            email:'',
            phone:''
        }
    },
    logout(){
        useUserStore().logout()
    }
  },
  created(){
    useUserStore().loadUser()
  }
}
</script>

<style>
body {
    background-color: rgb(73, 3, 81);
    font-family: 'Inter', sans-serif;
    text-decoration: none;
}

h2, p {
    margin-bottom: 15px;
}

#main-div {
    background-color: white;
    width: 60%;
    border-radius: 40px;
    margin: auto;
    margin-top: 5%;
    padding: 40px;
    text-align: center;
}

#main-div img {
    width: 150px;
}

#main-div button {
    padding: 15px;
    border-radius: 20px;
    color: white;
    background-color: rgba(146, 37, 171, 0.77);
    font-size: large;
    border: solid black 2px;
    margin: 10px;
    cursor: pointer;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input {
    width: 80%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #ccc;
    font-size: 16px;
}

@media (min-width: 1024px) {
    #preferences {
        flex-direction: row;
        gap: 80px;
        justify-content: center;
    }
}
</style>