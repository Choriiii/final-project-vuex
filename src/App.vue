<template>
<div id="body">
    
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

</style>