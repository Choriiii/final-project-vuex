<template>
<div id="body">
    <header>
      <router-link to="/" class="profile-link">
        <h1>Quiz App</h1>
      </router-link>
      <div id="avatar-container">
        <router-link to="/ProfilePage" class="profile-link">
          <img src="@/assets/Avatar.svg" alt="Avatar" id="avatar" />
        </router-link>
      </div>
    </header>

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
#body{
  width: 100%;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: rgb(82, 33, 88);
  margin-bottom: 25px;
  border-radius: 10px;
}

header h1 {
    font-size: 30px;
    color: white;
}

@media (min-width: 1024px) {

    header h1 {
        font-size: 35px;
    }
    header p {
        font-size: 30px;
    }
}
</style>