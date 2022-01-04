<template>
<nav class="navbar navbar-expand navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/mainPage" class="navbar-brand">Archon Courses</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-sm-0">
        <li class="nav-item">
          <router-link to="/create" class="navElement">Crear Cuenta</router-link>
        </li> 
        <li class="nav-item">
          <router-link to="/login" class="navElement">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="navElement">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav> 
<!-- Test commmit for navbar -->
</template>

<script>
export default {
name: 'Navbar',
}
</script>

<style>
.navElement {
  color: grey;
 text-decoration: none; 
 padding-right: 10px;
}
.navElement:hover {
  color: black;
}
</style>