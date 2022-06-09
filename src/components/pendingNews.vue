<template>
  <div class="card text-center cardSearchNews">
    <div class="card-body">
      <div
        v-for="noticia in noticias"
        :key="noticia.NEWS_ID"
        class="card mb-3 test"
        style="max-width: 5000px"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img v-bind:src="noticia.MEDIA" class="card-img-top" alt="..." />
            <br />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{noticia.TITLE}}</h5>
              <p class="card-text">
                {{noticia.LEAD_TEXT}}
              </p>
              <div class="d-flex justify-content-evenly">
                <!-- <button class="btn btn-primary" @click="check(noticia)">Ver noticia</button> -->
                
                <div class="btn-group" role="group" aria-label="Basic example" style="max-height: 60px !important">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="changeState(0, noticia.NEWS_ID)"
                  >
                    {{ estados[0] }}
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="changeState(2, noticia.NEWS_ID)"
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
    function changeState(index, id) {
      estadoSelected.value = estados.value[index];
      if (index === 2){
        var dataNews = new FormData();
        
        let newsId = id;
        dataNews.append("newsId",newsId);
        console.log(newsId)
        axios.post("http://archonnews.com/piaBDMBack/includes/news_inc.php?action=publicarNews", dataNews).then((response) => {
          console.log(response)
          this.getNews();
        })
      }else if( index === 0){
          var dataNews2 = new FormData();
        
        let newsId = id;
        dataNews2.append("newsId",newsId);
        console.log(newsId)
        axios.post("http://archonnews.com/piaBDMBack/includes/news_inc.php?action=ponerEnRedaccion", dataNews2).then((response) => {
          console.log(response)
          this.getNews();
        })



      }
    }
    function getNews() {
      axios
        .get(
          //"http://localhost:8070/piaBDMBack/piaBDMBack/includes/section_inc.php?action=selectSections",
          "http://archonnews.com/piaBDMBack/includes/news_inc.php?action=selectNewsTerminadas",
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
            console.log(res.data[0]);
            noticias.value = res.data[0]
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
