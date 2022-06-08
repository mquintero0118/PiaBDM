<template>
  <div class="d-flex justify-content-center">
    <h3>Reportes</h3>
  </div>
  <div class="d-flex justify-content-center">
    <div style="width: 15%">
      <label for="dataNTime">Secciones</label>
      <Multiselect
        :close-on-select="true"
        label="name"
        track-by="section"
        v-model="section"
        :options="sections"
      >
      </Multiselect>
    </div>
    <div style="width: 15%">
      <label for="dataNTime">Rango de fechas</label>
      <Datepicker v-model="date" range time />
    </div>
    <div style="width: 15%">
      <label for="dataNTime">Tipo de reporte</label>
      <Multiselect
        :close-on-select="true"
        label="name"
        track-by="section"
        v-model="section2"
        :options="sections2"
      >
      </Multiselect>
    </div>
  </div>
  <br />
  <button class="btn btn-primary" @click="sendData()">Buscar</button>
</template>

<script>
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import { ref, onMounted } from "vue";
import axios from "axios";
import Multiselect from "@vueform/multiselect";

export default {
  components: { Datepicker, Multiselect },
  setup() {
    var sections = ref([]);
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const section = ref();
    const section2 = ref();
    const date = ref();
    const sections2 = ref(["Noticia", "Secciones"]);

    function print(coso) {
      console.log(coso);
    }
    function getSecciones() {
      axios
        .get(
          "http://archonnews.com/piaBDMBack/includes/section_inc.php?action=selectSections",
          null,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          response.data[0].forEach((element) => {
            sections.value.push(element["DESCRIPTION"]);
            console.log(element);
          });
        });
    }
    function sendData() {
      let fecha = JSON.stringify(date.value[0]);
      fecha = fecha.slice(1, 11);

      let fecha2 = JSON.stringify(date.value[1]);
      fecha2 = fecha2.slice(1, 11);


       var data = new FormData();
       data.append("section", section.value)
       data.append("date1", fecha)
       data.append("date2", fecha2)
      for (var pair of data.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      axios.post("http://archonnews.com/piaBDMBack/includes/reportes_inc.php?action=reporteNoticia", data,
      {
            headers: {
              "Content-Type": "application/json",
              // "Content-Type": "multipart/form-data",
            },
          }).then((response) => {
              console.log(response)
          })
    }
    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];
      getSecciones();
    });
    return {
      date,
      print,
      getSecciones,
      sections,
      section,
      sections2,
      section2,
      sendData,
      options,
    };
  },
};
</script>

<style></style>
