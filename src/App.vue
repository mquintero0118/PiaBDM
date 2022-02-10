<template>
<navbar/>

  <div id="nav">
  </div>
  <div class="container-fluid">
  <router-view/>
  </div>
  <Footer/>
</template>
<script>
import Navbar from '../src/components/navbar.vue'
import Footer from '../src/components/footer.vue'



export default {
  components: { Navbar, Footer },
  setup() {

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(228, 228, 228);
  min-height: 100vh;
  display: flex;
    flex-direction: column;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
