<template>
  <div class="d-flex justify-content-cente">
    <div class="card cardStyle2">
      <div class="card-header">Crear Sección</div>
      <div class="card-body">
        <div>
          <label for="labelSection">Nombre de la sección </label>
          <input
          id="sectionName"
            type="text"
            class="form-control"
            v-model="emailV"
            onkeypress="return event.charCode != 32"
          />
        </div>


        <div>
          <br />
          <label for="sections" class="form-label">Color de la sección</label>

          <Multiselect
          v-model="sectionColor"
            value="test"
            mode="single"
            :close-on-select="true"
            :options="['Rojo', 'Amarillo', 'Verde', 'Azul'] "
          />
        </div>
<br>
        <div>
          <label for="labelSection">Orden de la seccion </label>
          <input
          id="sectionOrder"
            type="number"
            min="1"
            max="10"
            class="form-control"
            v-model="emailV"
            onkeydown="return false"
          />
        </div>
      </div>
      <div class="card-footer">
        <div class="container">
          <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-danger danger2" @click="confirm">
              Limpiar
            </button>
            <button type="button" class="btn btn-success success2" @click="createSection">
              Crear sección
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Multiselect from "@vueform/multiselect";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  components: { Multiselect },
  
  setup(){
    const router = useRouter();
      const sectionColor = ref();

    async function sendData() { 
        var data = new FormData();
      data.append("sectionColor", sectionColor.value);
        data.append("sectionName", document.getElementById("sectionName").value);
          data.append("sectionOrder", document.getElementById("sectionOrder").value);


      for(var pair of data.entries()) {
    console.log(pair[0]+ ', '+ pair[1]); 
}

await axios
        .post(
         
          "http://archonnews.com/piaBDMBack/includes/section_inc.php?action=create",
         
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.error == true) {
             console.log("Ocurrio un error!", res.data);
            // setTimeout(() => {
            //   loader();
            //   toastAlertError("El correo ya esta registrado");
            // }, 1000);
          } else {
            // setTimeout(() => {
            //   console.log(res.data.error);
            //  // toastAlertSucess("Usuario creado con exito!");
              console.log(res);
              send2Main();
            //   cleanVariables();
            //   cleanAlerts();
            //   loader();
            // }, 2000);
          }
        })
        .catch((error) => {
          console.log("Ocurrio un error en el servicio", error);
          // setTimeout(() => {
          //  toastAlertError("Error en la conexion");
          //   loader();
          // }, 2000);
        });
    }

    async function send2Main() {
      router.push({ path: "/mainPage" });
    }
    

  const createSection = () => {
        sendData();
      };

    return{
sectionColor,
createSection,
    };
  },

};
</script>

<style>
.cardStyle2 {
  width: 30% !important;
  max-width: 40% !important;
  margin-left: 35% !important;
}
.danger2 {
  width: 30%;
}
.success2{
  width: 30%;
}
</style>
