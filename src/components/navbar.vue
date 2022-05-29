<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/mainPage" class="navbar-brand">Archon News</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto my-2 my-lg-0">
          <li class="nav-item">
            <router-link to="/create" class="nav-link" v-if="!store.state.name"
              >Crear Cuenta</router-link
            >
          </li>
          <li class="nav-item" v-if="!store.state.name">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item dropdown" v-if="store.state.name">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{store.state.name}}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="dropdown-item">
                <router-link to="/editProfile" class="nav-link"
                  >Editar Perfil</router-link
                >
              </li>
              <li  v-if="store.state.name && store.state.user_type === 'Editor'" class="dropdown-item">
                <router-link to="/createReporter" class="nav-link"
                  >Registrar Reportero</router-link
                >
              </li>

              <li v-if="store.state.name && store.state.user_type === 'Editor'" class="dropdown-item">
                <router-link to="/createSection" class="nav-link"
                  >Crear sección</router-link
                >
              </li>
              <li   v-if="store.state.name && store.state.user_type === 'Editor'" class="dropdown-item">
                <router-link to="/editSection" class="nav-link"
                  >Editar sección</router-link
                >
              </li>
              <li class="dropdown-item">
                <button  @click="closeSession" type="button" class="btn btn-danger btn-sm">
                  <i class="fas fa-sign-out-alt"></i> Cerrar Sesion
                </button>
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="store.state.name && store.state.user_type === 'Reportero'">
            <router-link to="/createNews" class="nav-link"
              >Crear Noticia</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/searchNews" class="nav-link"
              >Buscar Noticia</router-link
            >
          </li>
         
          
        </ul>
      </div>
    </div>
  </nav>
  <!-- Test commmit for navbar -->
</template>

<script>
import { useStore } from "vuex";
// import { ref,  } from "vue";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Navbar",
  setup() {
    const store = useStore();

    function closeSession() {
      store.state.name = null;
      store.state.email = null;
      store.state.last_name = null;
      store.state.user_id = null;
      store.state.user_type = null;
    }

    function testData() {
      console.log(store.state);
    }
    onMounted(() => {});
    return {
      store,
      testData,
      closeSession,
    };
  },
};
</script>

<style>
.nav-link {
  color: grey !important;
}
.nav-link:hover {
  color: black !important;
}
.nav-item {
  color: grey;
  text-decoration: none;
}
.dropdown-item {
  text-align: center !important;
}
.dropdown-menu {
  z-index: 2000 !important;
}
.btn-danger {
  width: 100%;
}
</style>
