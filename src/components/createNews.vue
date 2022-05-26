<template>
  <div class="d-flex">
    <div class="card cardStyle">
      <div class="card-header">Crear Noticia</div>
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col">
              <div>
                <label for="title">Titulo de la noticia </label>
                <input
                  type="text"
                  id="newsTitle"
                  class="form-control"
                  v-model="title"
                />
              </div>
              <br />
              <div>
                <label for="desc">Descripción de la noticia </label>
                <textarea
                  type="text"
                  id="newsLead"
                  class="form-control"
                  v-model="desc"
                />
              </div>
              <br />
              <div>
                <label for="text">Texto de la noticia </label>
                <textarea type="text" id="newsText" class="form-control" />
              </div>
              <br />
              <div class="row">
                <div class="d-flex bd-highlight">
                  <div class=" flex-fill bd-highlight">
                    <label for="country">Pais </label>
                    <input type="text" id="newsCountry" class="form-control" />
                  </div>
                  <div class=" flex-fill bd-highlight">
                    <label for="state">Estado </label>
                    <input type="text" id="newsState" class="form-control" />
                  </div>
                  <div class=" flex-fill bd-highlight">
                    <label for="city">Ciudad </label>
                    <input type="text" id="newsCity" class="form-control" />
                  </div>
                </div>
              </div>
              <br />
              <div>
                <label for="dataNTime">Fecha y hora </label>
                <Datepicker v-model="date" showNowButton ref="datepicker">
                  <template #am-pm-button="{ toggle, value }">
                    <button @click="toggle">{{ value }}</button>
                  </template>
                </Datepicker>
              </div>
            </div>
            <div class="col">
              <div>
                <label for="formFileMultiple" class="form-label"
                  >Imagenes</label
                >
                <input
                  class="form-control"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  id="formFileMultipleImg"
                  multiple
                />
              </div>
              <br />
              <div>
                <label for="formFile" class="form-label">Videos</label>
                <input
                  class="form-control"
                  type="file"
                  accept="video/mp4"
                  id="formFileMultipleVid"
                  multiple
                />
              </div>
              <div>
                <br />
                <label for="sections" class="form-label">Secciones</label>

                <Multiselect
                  mode="tags"
                  :close-on-select="true"
                  label="name"
                  track-by="section"
                  v-model="section"
                  :options="sections"
                >
                </Multiselect>
              </div>
              <div>
                <br />
                <label for="keyWords" class="form-label">Palabras clave</label>
                <Multiselect
                  mode="tags"
                  v-model="valueTags"
                  :close-on-select="false"
                  :searchable="true"
                  :create-option="true"
                />
              </div>
              <br />
              <div>
                <label for="signature">Firma del reportero </label>
                <input type="text" id="newsSignature" class="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="container">
          <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-primary btnE">
              En Redaccion
            </button>
            <button type="button" class="btn btn-primary btnE" @click="confirm">
              Terminar Noticia
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
</template>

<script>
import { onMounted, ref } from "vue";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import Multiselect from "@vueform/multiselect";
import axios from "axios";

export default {
  components: { Datepicker, Multiselect },

  setup() {
    /* v-models */

    var options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
    };
    const title = ref("");
    const section = ref();
    var sections = ref([]);
    const valueTags = ref();
    const date = ref(new Date());

    // const desc = ref('');
    /* Functions */
    function confirm() {
      sendData();
    }

    async function sendData() {
      var data = new FormData();
      data.append("title", document.getElementById("newsTitle").value);
      data.append("lead", document.getElementById("newsLead").value);
      data.append("text", document.getElementById("newsText").value);
      data.append("country", document.getElementById("newsCountry").value);
      data.append("state", document.getElementById("newsState").value);
      data.append("city", document.getElementById("newsCity").value);
      data.append("signature", document.getElementById("newsSignature").value);
      data.append(
        "video",
        document.getElementById("formFileMultipleVid").value
      );
      data.append("img", document.getElementById("formFileMultipleImg").value);
      data.append("seccion", section.value);
      data.append("tag", valueTags.value);

      var datelocal = date.value.toLocaleDateString("en", options);
      var dateSQL =
        datelocal.substring(6) +
        "-" +
        datelocal.substring(0, 2) +
        "-" +
        datelocal.substring(3, 5);

      data.append(
        "dateTime",
        dateSQL + " " + date.value.toTimeString().split(" ")[0]
      );
      //console.log( date.value.toJSON().slice(0, 19).replace('T', ' '));

      //       data.append("lastName", lastNameV.value)
      //       data.append("email", emailV.value);
      //       data.append("pass", passwordV.value);

      for (var pair of data.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      await axios
        .post(
          //http://localhost:8070/test.php?action=create
          // http://localhost:8070/piaBDMBack/api.php?action=create
          "http://localhost:8070/piaBDMBack/piaBDMBack/includes/news_inc.php?action=create",
          //"http://localhost/PIA_BDM/piaBDMBack/api.php?action=create",
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
            //  setTimeout(() => {

            //   }, 1000);
          } else {
            // setTimeout(() => {
            //   }, 2000);
          }
        })
        .catch((error) => {
          console.log("Ocurrio un error en el servicio", error);
          //   setTimeout(() => {

          //  }, 2000);
        });
    }

    onMounted(() => {
      /* Aqui haces la peticion con axios */
      /* response lo iguales a una constante
      tipo asi sections = res.data.data*/
      /* es necesario que tenga una estructura como la de arriba*/

      axios
        .get(
          "http://localhost:8070/piaBDMBack/piaBDMBack/includes/section_inc.php?action=selectSections",
          //"http://localhost/PIA_BDM/piaBDMBack/api.php?action=create",
          null,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.error == true) {
            console.log("Ocurrio un error!", res.data);
            //  setTimeout(() => {

            //    }, 1000);
          } else {
            //    setTimeout(() => {
            console.log(res.data[0]);

            res.data[0].forEach((element) => {
              sections.value.push(element["DESCRIPTION"]);
              console.log(element);
            });

            //  sections.value = [res.data[0][0].DESCRIPTION, res.data[0][1].DESCRIPTION, res.data[0][2].DESCRIPTION];
            console.log(sections);
            //    }, 2000);
          }
        })
        .catch((error) => {
          console.log("Ocurrio un error en el servicio", error);
          //   setTimeout(() => {

          //  }, 2000);
        });
    });
    return {
      /* v-models */
      title,
      /* Functions */
      confirm,
      sections,
      section,
      date,
      valueTags,
    };
  },
};
</script>

<style>
@import "../assets/css/multiselect.scss";

.btnE {
  max-width: 170px;
  min-width: 15%;
}
.cardStyle {
  width: 70% !important;
  max-width: 70% !important;
  margin-left: 15% !important;
}
.dp__input {
  background-color: #f5f5f5;
  border-radius: var(--ms-radius, 8px);
}
.dp__input_wrap {
  background-color: #f5f5f5;
  width: 75%;
  margin-left: 13%;
  border-radius: var(--ms-radius, 8px);
}
</style>
