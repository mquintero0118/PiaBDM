<template>
  <div class="card text-center cardSearchNews">
    <div class="card-body">
      <div
      v-for="(noticia, index) in noticias" :key="index"
       
        class="card mb-3 test"
        style="max-width: 5000px"
      >
        <div class="row g-0">
          <div class="col-md-4">
            
            <br />
          </div>
          <div class="col-md-12">
            <div class="card-body">
              <h5 class="card-title">{{noticia.TITLE}}</h5>
              <p class="card-text">
                {{noticia.LEAD_TEXT}}
              </p>
              <div class="d-flex justify-content-evenly">
                <button class="btn btn-primary" @click="checkNews(noticia)">Ver noticia</button>
                
               
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
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
     const noticiaIndex = ref({


  });
        const store = useStore();
    const noticias = ref();
    const estadoSelected = ref("En redaccion");
    const estados = ref(["En redaccion", "Terminada", "Publicada"]);

    function checkNews(index){
      noticiaIndex.value = index;
      console.log(index.NEWS_ID);
      router.push({ name: 'CreateNewsEnRedaccion', query: { newsId: index.NEWS_ID } })
    }

    function changeState(index) {
      estadoSelected.value = estados.value[index];
    }
    function getNewsRedaccion() {
       var data = new FormData();
     data.append("userId", store.state.user_id);

       

    
    

      axios
        .post(
          //"http://localhost:8070/piaBDMBack/piaBDMBack/includes/section_inc.php?action=selectSections",
          "http://archonnews.com/piaBDMBack/includes/news_inc.php?action=selectNewsRedaccion",
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
      getNewsRedaccion();
    });
    return { 
      checkNews,
      estados,
      estadoSelected,
      changeState,
      getNewsRedaccion,
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
