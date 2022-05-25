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
                <textarea
                  type="text"
                  id="newsText"
                  class="form-control"
                />
              </div>
              <br />
              <div>
                <label for="place">Lugar de los hechos </label>
                <input
                  type="text"
                  id="newsPlace"
                  class="form-control"
                />
              </div>
              <br />
              <div>
                <label for="dataNTime">Fecha y hora </label>
                <Datepicker showNowButton ref="datepicker">
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
                  label="value"
                  track-by="section"
                >
                </Multiselect>
              </div>
              <div>
                <br />
                <label for="keyWords" class="form-label">Palabras clave</label>
                <Multiselect
                  mode="tags"
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
import { ref } from "vue";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import Multiselect from "@vueform/multiselect";
// import axios from "axios";

export default {
  components: { Datepicker, Multiselect },

  setup() {
    /* v-models */
    const title = ref('');
    // const desc = ref('');
    /* Functions */
    function confirm() {
      console.log(title.value)
    }

    return {
      /* v-models */
      title,
      /* Functions */
      confirm,
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
