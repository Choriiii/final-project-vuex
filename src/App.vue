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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>