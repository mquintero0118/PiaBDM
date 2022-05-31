<template>
  <div class="card text-center cardSearchNews">
    <div class="card-body">
      <div
        v-for="index in 3"
        :key="index"
        class="card mb-3 test"
        style="max-width: 5000px"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="./testImages/newspaper.png"
              class="img-fluid rounded-start"
              alt="..."
            />
            <br />
            <h6 class="card-title">
              Estado de la noticia: {{ estadoSelected }}
            </h6>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Titulo de la noticia</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque scelerisque mi eget commodo maximus. Curabitur sed
                vestibulum libero. Donec lacinia imperdiet purus eget tempus.
              </p>
              <div class="d-flex justify-content-evenly">
                <router-link to="/seeNews" class="btn btn-primary"
                  >Ver noticia</router-link
                >
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="changeState(0)"
                  >
                    {{ estados[0] }}
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="changeState(1)"
                  >
                    {{ estados[1] }}
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="changeState(2)"
                  >
                    {{ estados[2] }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
export default {
  setup() {
    const noticias = ref();
    const estadoSelected = ref("En redaccion");
    const estados = ref(["En redaccion", "Terminada", "Publicada"]);
    function changeState(index) {
      estadoSelected.value = estados.value[index];
    }
    function getNews() {
      axios
        .get(
          //"http://localhost:8070/piaBDMBack/piaBDMBack/includes/section_inc.php?action=selectSections",
          "http://localhost/piaBDMBack/includes/news_inc.php?action=selectRecentNews",
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
          } else {
            console.log(res);
            noticias.value = res.data;
            console.log(noticias.value);
          }
        })
        .catch((error) => {
          console.log("Ocurrio un error en el servicio", error);
        });
    }
    onMounted(() => {
      getNews();
    });
    return {
      estados,
      estadoSelected,
      changeState,
      getNews,
      noticias,
    };
  },
};
</script>

<style>
.cardSearchNews {
  width: 70%;
  max-width: 2000px;
  margin-left: 14%;
  margin-bottom: 40px;
}
.search {
  margin-left: 0%;
}
.form-control::placeholder {
  color: rgba(170, 170, 170, 0.801) !important;
}
.cardRelated {
  margin-left: 35%;
  margin-bottom: 30px;
}
.test {
  width: 100%;
}
</style>
