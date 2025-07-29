<template>
 <div>
    <div id="main-div">
      <img src="../assets/Avatar.svg" alt="Avatar">
      <!-- user name -->
      <h2 id="user-ID">User ID</h2>
      <!-- Full name -->
       <p id="full-name">Full Name</p>
       <!-- Email -->
        <p>Email</p>
        <!-- phone number -->
         <p>Phone Num</p>
         <!-- address -->
        
        <button>Solve a Quiz!!</button>
    </div>
  </div>
  
</template>

<script>
export default {
    name: 'ProfileCompo'

}
</script>

<style>
body {
    background-color: rgb(73, 3, 81);
    font-family: 'Inter', sans-serif;
    text-decoration: none;
}
#main-div{
    background-color: white;
    width: 60%;
    text-align: center;
    border-radius: 40px;
    margin: auto;
    margin-top: 5%;
    padding: 40px;
}
#main-div img{
    width: 150px;
}
#main-div button{
    padding: 15px;
    border-radius: 20px;
    color: white;
    background-color:  rgba(146, 37, 171, 0.77);
    font-size: large;
    border: solid black 2px;
}
#preferences{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0;
}
#preferences li{

    font-weight: bold;
}

@media (min-width: 1024px) {
    #preferences{
        flex-direction: row;
        gap: 80px;
        justify-content: center;
    }
}

</style>