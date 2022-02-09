<template>
<ul class="nav fixed-bottom justify-content-center bg-light">
<ul class="nav flex-column"> 

  <li class="title">
    <span>Archon News</span>
  </li>
  <nav class="navbar navbar-expand-lg navbar-light bg-light space">
      <ul class="nav justify-content-center">
  <li class="nav-item">
          <router-link to="/" class="nav-link">IT & Software</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Marketing</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Design</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link">Pop</router-link>
        </li>
        <hr class="line">
        <li class="lastFooter">
    <span>© 2021 Archon News, Inc. All rights reserved.</span>
  </li>
</ul>
        
  </nav>
  
  
  
</ul>
</ul>
</template>

<script>
export default {

}
</script>

<style>
.title{
    font-size: 26px;
    color: grey;
}
.line {
    color: rgb(165, 165, 165);
    width: 100%;
}
.lastFooter {
    font-size: 15px;
    color: rgb(155, 155, 155);
    padding-bottom: 5px;
}
.navbar {
    padding-bottom: 10px;
}
</style>