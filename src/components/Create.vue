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
          <label for="labelNameR">Usuario </label>
          <input
            type="text"
            class="form-control"
            id="inputUserR"
            v-model="userV"
            @click="checkInput('inputUserR')"
            @keydown.tab="checkInput('inpuntEmailR')"
          />
          <transition name="fade">
            <div
              v-if="userError === true"
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
          <transition name="fade">
            <div
              v-if="emailError2 === true"
              class="alert alert-warning d-flex align-items-center"
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
import axios from "axios";
export default {
  setup() {
    /* Router */
    const router = useRouter();
    /* Loader */
    const loading = ref(false);
    /* Toast */
    const toast = useToast();
    /* V-models */
    const userV = ref("");
    const emailV = ref("");
    const passwordV = ref("");
    /* errors */
    const userError = ref();
    const emailError = ref();
    const emailError2 = ref();
    const passwordError = ref();
    const passwordError2 = ref();
    let msgError = ref("");
    let msgErrorEmail = ref("");
    let errorGlobal = false;
    let errorDB = false;
    /* Functions */
    function validateVariables() {
      /* Whitespaces validation */
      if (!userV.value.replace(/\s/g, "").length) {
        userError.value = true;
      }
      /* Whitespaces validation */
      if (!emailV.value.replace(/\s/g, "").length) {
        emailError.value = true;
        msgErrorEmail.value = "Favor de llenar el correo";
      }
      /* Correcto email format validation */
      if (emailError.value === false) {
        //eslint-disable-next-line
        const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailV.value.match(validateEmail)) {
          emailError2.value = true;
          msgErrorEmail.value = "Correo invalido";
        }
      }
      /* Whitespaces validation */
      if (!passwordV.value.replace(/\s/g, "").length) {
        passwordError.value = true;
      }
      /* Valitions for special character, number, caps and lenght */
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
      /* Whitespaces validation */
      if (
        userError.value === true ||
        emailError.value === true ||
        passwordError.value === true ||
        passwordError2.value === true ||
        emailError2.value === true
      ) {
        errorGlobal = true;
      } else {
        errorGlobal = false;
      }
    }
    function cleanVariables() {
      userV.value = "";
      emailV.value = "";
      passwordV.value = "";
    }
    function cleanAlerts() {
      userError.value = false;
      emailError.value = false;
      passwordError.value = false;
    }
    function checkInput(id) {
      if (id === "inputUserR") {
        userError.value = false;
      }
      if (id === "inpuntEmailR") {
        emailError.value = false;
        emailError2.value = false;
      }
      if (id === "inputPassR") {
        passwordError.value = false;
        passwordError2.value = false;
      }
    }
    async function sendData() {
      var data = new FormData();
      data.append("name", userV.value);
      data.append("email", emailV.value);
      data.append("pass", passwordV.value);
      await axios
        .post(
          //http://localhost:8070/test.php?action=create
          // http://localhost:8070/piaBDMBack/api.php?action=create
          "http://localhost:8070/piaBDMBack/api.php?action=create",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.error) {
            console.log("Ocurrio un error!", res.data);
            setTimeout(() => {
              
              loader();
              toastAlertError("El correo ya esta registrado");
            }, 1000) ;
            
            
          } else {
            setTimeout(() => {
            toastAlertSucess();
            send2Main();
            cleanVariables();
            cleanAlerts();
            loader();
            }, 2000) ;
            
          }
        })
        .catch((error) => {
          console.log("Ocurrio un error en el servicio", error);
          setTimeout(() => {
           toastAlertError("Error en la conexion");
          loader();
            }, 2000) ;
          
        });
    }
    function toastAlertSucess() {
      toast.success("Usuario creado con exito!", {
        timeout: 1500,
        zindex: 2000,
      });
    }
    function toastAlertError(message) {
      toast.error(message, {
        timeout: 1500,
        zindex: 2000,
      });
    }
    function loader() {
      loading.value = !loading.value;
    }
    async function send2Main() {
        router.push({ path: "/mainPage" });
    }
    /* EventsOnClick */
    const confirm = () => {
      validateVariables();
      if (errorGlobal === false) {
        sendData();
        loader();
      } else {
        toastAlertError("Porfavor llena todos los campos");
      }
    };
    onMounted(() => {
      /* userV.value = '';
      emailV.value = '';
      passwordV.value = ''; */
    });
    return {
      /* Loader */
      loading,
      /* Totast */
      toast,
      /* V-models */
      userV,
      emailV,
      passwordV,
      /* Errors */
      userError,
      emailError,
      emailError2,
      passwordError,
      passwordError2,
      errorGlobal,
      msgError,
      msgErrorEmail,
      errorDB,
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
