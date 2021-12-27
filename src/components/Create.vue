<template>
  <div class="d-flex justify-content-center">
    <div class="card text-center">
      <div class="card-header">Registro</div>
      <div class="card-body">
        <!-- Loader -->
        <div v-if="loading === true" class="overlay">
          <div class="h-100 d-flex justify-content-center align-items-center">
            <div class="spinner-border" role="status"></div>
          </div>
        </div>
        <!-- Loader -->
        <h4 class="card-title">Vamos a crear tu cuenta!</h4>
        <div id="globalNameR" class="field">
          <label for="labelNameR">Nombre </label>
          <input
            type="text"
            class="form-control"
            id="inputNameR"
            v-model="nameV"
            @click="checkInput('inputNameR')"
            @keydown.tab="checkInput('inpuntEmailR')"
          />
          <transition name="fade">
            <div
              v-if="nameError === true"
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              Favor de llenar el nombre
            </div>
          </transition>
        </div>

        <div id="globalEmailR" class="field">
          <label for="labelEmailR">Correo Electronico</label>
          <input
            type="text"
            class="form-control"
            id="inpuntEmailR"
            v-model="emailV"
            @click="checkInput('inpuntEmailR')"
            @keydown.tab="checkInput('inputPassR')"
            onkeypress="return event.charCode != 32"
          />
          <transition name="fade">
            <div
              v-if="emailError === true"
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              {{ msgErrorEmail }}
            </div>
          </transition>
        </div>
        <div id="globalPasswordR" class="field">
          <label for="labelPassR">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="inputPassR"
            v-model="passwordV"
            @click="checkInput('inputPassR')"
            onkeypress="return event.charCode != 32"
          />
          <transition name="fade">
            <div
              v-if="passwordError === true"
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              Favor de llenar la contraseña!
            </div>
          </transition>
          <transition name="fade">
            <div
              v-if="passwordError2 === true"
              class="alert alert-warning d-flex align-items-center"
              role="alert"
            >
              {{ msgError }}
            </div>
          </transition>
        </div>
        <div id="globalRol" class="field">
          <label for="labelRol">Rol</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="selectedV"
            @click="checkInput('selectedV')"
          >
            <option
              v-for="product in products"
              v-bind:value="{ id: product.id, text: product.name }"
              v-bind:key="product"
            >
              {{ product.name }}
            </option>
          </select>
          <transition name="fade">
            <div
              v-if="selectError === true"
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              Favor de seleccionar un rol
            </div>
          </transition>
        </div>
      </div>
      <div class="card-footer">
        <div class="container">
          <div class="d-flex justify-content-around">
            <router-link to="/login" class="btn btn-primary"
              >Ya tengo cuenta</router-link
            >
            <button type="button" class="btn btn-primary" @click="confirm">
              Crear cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
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
    /* Select */
    const products = [
      { id: 1, name: "Estudiante" },
      { id: 2, name: "Escuela" },
    ];
    /* V-models */
    const nameV = ref("");
    const emailV = ref("");
    const passwordV = ref("");
    const selectedV = ref({ id: "", text: "" });
    /* errors */
    const nameError = ref();
    const emailError = ref();
    const passwordError = ref();
    const passwordError2 = ref();
    const selectError = ref();
    let msgError = ref("");
    let msgErrorEmail = ref("");
    let errorGlobal = false;
    /* Functions */
    function validateVariables() {
      if (!nameV.value.replace(/\s/g, "").length) {
        nameError.value = true;
      }
      if (!emailV.value.replace(/\s/g, "").length) {
        emailError.value = true;
        msgErrorEmail.value = "Favor de llenar el correo";
      }
      if (emailError.value === false) {
        //eslint-disable-next-line
        const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailV.value.match(validateEmail)) {
          emailError.value = true;
          msgErrorEmail.value = "Correo invalido";
        }
      }
      if (!passwordV.value.replace(/\s/g, "").length) {
        passwordError.value = true;
      }
      //eslint-disable-next-line
      const validationSC = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      const validationChar = /(?=.*[A-Z])/;
      const validationNumber = /(?=.*[0-9])/;
      const validationLenght = /^.{8,35}$/;
      if (passwordError.value === false) {
        msgError.value = "La contraseña debe tener:";
        if (!passwordV.value.match(validationSC)) {
          passwordError2.value = true;
          msgError.value += " -un caracter especial";
        }
        if (!passwordV.value.match(validationChar)) {
          passwordError2.value = true;
          msgError.value += " -una mayuscula";
        }
        if (!passwordV.value.match(validationNumber)) {
          passwordError2.value = true;
          msgError.value += " -un numero";
        }
        if (!passwordV.value.match(validationLenght)) {
          passwordError2.value = true;
          msgError.value += " -minimo 8 caracteres";
        }
      }
      if (!selectedV.value.text.replace(/\s/g, "").length) {
        selectError.value = true;
      }
      if (
        nameError.value === true ||
        emailError.value === true ||
        passwordError.value === true ||
        selectError.value === true ||
        passwordError2.value === true
      ) {
        errorGlobal = true;
      } else {
        errorGlobal = false;
      }
    }
    function cleanVariables() {
      nameV.value = "";
      emailV.value = "";
      passwordV.value = "";
      selectedV.value = { id: "", text: "" };
    }
    function cleanAlerts() {
      nameError.value = false;
      emailError.value = false;
      passwordError.value = false;
      selectError.value = false;
    }
    function checkInput(id) {
      if (id === "inputNameR") {
        nameError.value = false;
      }
      if (id === "inpuntEmailR") {
        emailError.value = false;
      }
      if (id === "inputPassR") {
        passwordError.value = false;
        passwordError2.value = false;
      }
      if (id === "selectedV") {
        selectError.value = false;
      }
    }
    async function sendData() {
      const data = {
        nombre: nameV.value,
        correo: emailV.value,
        password: passwordV.value,
        rol: selectedV.value.text,
      };
      console.log(data);
    }
    function toastAlertSucess() {
      toast.success("Usuario creado con exito!", {
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
    onMounted(() => {
      /* nameV.value = '';
      emailV.value = '';
      passwordV.value = ''; */
    });
    return {
      /* Loader */
      loading,
      /* Totast */
      toast,
      /* Select */
      products,
      /* V-models */
      nameV,
      emailV,
      passwordV,
      selectedV,
      /* Errors */
      nameError,
      emailError,
      passwordError,
      passwordError2,
      errorGlobal,
      selectError,
      msgError,
      msgErrorEmail,
      /* Functions */
      validateVariables,
      cleanVariables,
      cleanAlerts,
      checkInput,
      sendData,
      loader,
      toastAlertSucess,
      toastAlertError,
      send2Main,
      /* EventsOnClick */
      confirm,
    };
  },
};
</script>

<style>
@import "../assets/css/theme.css";
@import "../assets/css/myStyles.css";
</style>
