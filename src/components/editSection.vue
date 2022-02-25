<template>
  <div class="d-flex justify-content-cente">
    <div class="card cardStyle2">
      <div class="card-header">Crear Sección</div>
      <div class="card-body">
        <div>
          <label for="labelSection">Nombre de la sección </label>
          <input
            type="text"
            class="form-control"
            onkeypress="return event.charCode != 32"
            value="Marketing"
          />
        </div>
        <div>
          <br />
          <label for="sections" class="form-label">Color de la sección</label>

          <Multiselect
  v-model="valor"
  :options="['Rojo', 'Verde', 'Amarillo']"
/>
        </div>
      </div>
      <div class="card-footer">
        <div class="container">
          <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-danger danger2" @click="confirm">
              Limpiar
            </button>
            <button type="button" class="btn btn-success success2" @click="confirm">
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  components: { Multiselect },
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
