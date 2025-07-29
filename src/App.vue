<template>
<div>
    <ul>
      <li>
        <router-link to="/">Home page</router-link>
      </li>
       <li>
        <router-link to="/ProfilePage">Profile page</router-link>
      </li>
      
    </ul>
    <router-view />
  </div>
  
</template>

<script>
export default {
name:"App",
}
</script>

<style>

</style>