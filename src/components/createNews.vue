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
                <input type="text" class="form-control" />
              </div>
              <br />
              <div>
                <label for="desc">Descripción de la noticia </label>
                <textarea type="text" class="form-control" />
              </div>
              <br />
              <div>
                <label for="text">Texto de la noticia </label>
                <textarea type="text" class="form-control" />
              </div>
              <br />
              <div>
                <label for="place">Lugar de los hechos </label>
                <input type="text" class="form-control" />
              </div>
              <br />
              <div>
                <label for="dataNTime">Fecha y hora </label>
              <Datepicker v-model="date" showNowButton>
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
                  id="formFileMultiple"
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
                  id="formFileMultiple"
                  multiple
                />
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
            <button type="button" class="btn btn-primary btnE">
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
 import { ref } from 'vue';
    import Datepicker from 'vue3-date-time-picker';
    import 'vue3-date-time-picker/dist/main.css'

export default {
   components: { Datepicker },
   setup() {
            const date = ref();
            
            return {
                date
            }
        }
};
</script>

<style>
.btnE {
  max-width: 170px;
  min-width: 15%;
}
.cardStyle {
  width: 70% !important;
  max-width: 70% !important;
  margin-left: 16%;
}
 .dp__input{
  background-color: #F5F5F5;
} 
.dp__input_wrap{
  background-color: #F5F5F5;
  width: 75%;
  margin-left: 13%;
}
</style>
