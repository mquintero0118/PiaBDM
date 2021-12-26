<template>
  <div class="d-flex justify-content-center">
    <div class="card text-center">
      <div class="card-header">Login</div>
      <div class="card-body">
        <!-- Loader -->
        <div v-if="loading === true" class="overlay">
          <div class="h-100 d-flex justify-content-center align-items-center">
            <div class="spinner-border" role="status"></div>
          </div>
        </div>
        <!-- Loader -->
        <h4 class="card-title">Entra a tu cuenta!</h4>
        <!-- Email -->
        <div id="globalEmailL" class="field">
          <label for="labelEmailL">Correo Electronico </label>
          <input
            type="text"
            class="form-control"
            id="inputEmailL"
            v-model="emailV"
            @click="checkInput('inputEmailL')"
            @keydown.tab="checkInput('inputPassL')"
            onkeypress="return event.charCode != 32"
          />
          <transition name="fade">
            <div
              v-if="emailError === true"
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              Favor de llenar el nombre
            </div>
          </transition>
        </div>
        <!-- Email -->
        <!-- Password -->
        <div id="globalPasswordL" class="field">
          <label for="labelPassL">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="inputPassL"
            v-model="passwordV"
            @click="checkInput('inputPassL')"
            onkeypress="return event.charCode != 32"
          />
          <transition name="fade">
            <div
              v-if="passwordError === true"
              class="alert alert-danger d-flex align-items-center"
              role="alert"
              id="alertPass"
            >
              Favor de llenar la contraseña
            </div>
          </transition>
        </div>
        <!-- Password -->
      </div>
      <div class="card-footer">
        <div class="container">
          <div class="d-flex justify-content-around">
            <router-link to="/create" class="btn btn-primary"
              >No tengo cuenta</router-link
            >
            <button type="button" class="btn btn-primary" @click="confirm">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
export default {
  setup() {
    /* Router */
    const router = useRouter();
    /* Loader */
    const loading = ref(false);
    /* Toast */
    const toast = useToast();
    /* V-models */
    const emailV = ref("");
    const passwordV = ref("");
    /* Errors */
    const emailError = ref();
    const passwordError = ref();
    let errorGlobal = false;
    /* Functions */
    function validateVariables() {
      if (!emailV.value.replace(/\s/g, "").length) {
        emailError.value = true;
      }
      if (!passwordV.value.replace(/\s/g, "").length) {
        passwordError.value = true;
      }
      if (emailError.value === true || passwordError.value === true) {
        errorGlobal = true;
      } else {
        errorGlobal = false;
      }
    }
    function cleanVariables() {
      emailV.value = "";
      passwordV.value = "";
    }
    function cleanAlerts() {
      emailError.value = false;
      passwordError.value = false;
    }
    function checkInput(id) {
      if (id === "inputEmailL") {
        emailError.value = false;
      }
      if (id === "inputPassL") {
        passwordError.value = false;
      }
    }
    async function sendData() {
      const data = {
        correo: emailV.value,
        password: passwordV.value,
      };
      console.log(data);
    }
    function toastAlertSucess() {
      toast.success("Bienvenido de vuelta!", {
        timeout: 1500,
        zindex: 2000,
      });
    }
    function toastAlertError() {
      toast.error("Porfavor llena todos los campos!", {
        timeout: 1500,
        zindex: 2000,
      });
    }
    function loader() {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 1400);
    }
    async function send2Main() {
      setTimeout(() => {
        router.push({ path: "/mainPage" });
      }, 1300);
    }
    /* EventsOnClick */
    const confirm = () => {
      validateVariables();
      if (errorGlobal === true) {
        toastAlertError();
      } else {
        sendData();
        loader();
        toastAlertSucess();
        cleanVariables();
        cleanAlerts();
        send2Main();
      }
    };
    return {
      /* Loader */
      loading,
      /* Toast */
      toast,
      /* V-models */
      emailV,
      passwordV,
      /* Errors */
      emailError,
      passwordError,
      errorGlobal,
      /* Functions */
      validateVariables,
      cleanVariables,
      cleanAlerts,
      checkInput,
      sendData,
      toastAlertSucess,
      toastAlertError,
      loader,
      send2Main,
      /* EventsOnClick */
      confirm,
    };
  },
};
</script>

<style>
@import "../assets/css/theme.css";
@import "../assets/css/myStyles.css"
</style>
