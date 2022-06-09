
<template>


  <ul class="justify-content-center">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <header
        class="py-5 mb-5"
        style="
          background-color: #eee;
          background-image: url(https://i.ibb.co/PmfmqxQ/image.png);
          height: 280px;
          background-repeat: no-repeat;
          background-size: cover;
        "
      >
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div
              class="col-lg-12"
              style="background-color: rgba(255, 255, 255, 0.719)"
            >
              <h1
                class="display-4 text-black mt-5 mb-2"
                style="
                  text-align: center;
                  font-size: 60px;
                  font-family: monospace;
                "
              >
                Archon News
              </h1>
              <p class="lead mb-4 text-black-20" style="text-align: center">
                El mejor portal de noticias
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <hr>
        <h1 class="newNews">Nuevas noticias</h1>
      </li>
      <li class="nav-item">
        <div class="d-flex justify-content-center">
          <div class="d-flex flex-wrap">
<div v-for="(noticia, index) in noticias" :key="index" class="card cardMain" style="width: 18rem">
          <img v-bind:src="noticia.MEDIA" class="card-img-top" alt="..." />
          <div class="card-body">
        <h5 class="card-title">{{noticia.TITLE}}</h5>
            <p class="card-text">
              {{noticia.LEAD_TEXT}}
            </p>
          <!-- <seeNews :noticia="noticiaIndex" @click="check(noticia)"/> -->
          <button class="btn btn-primary" @click="check(noticia)">Ver noticia</button>
          </div>
        </div>
          </div>

        </div>
        
      </li>
      <li class="nav-item">
        <hr>
        <h1>Noticias mas vistas</h1>
      </li>
      <li class="nav-item">
        
<div class="d-flex justify-content-center">
  <div class="d-flex flex-wrap">
<div v-for="index in 3" :key="index" class="card cardSecond" style="width: 10rem">
          <img src="./testImages/newspaper.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">El mejor portal de noticias</h5>
            <p class="card-text">
              Archon News fue premiado como el mejor portal para noticias en el mundo...
            </p>
            <router-link to="/seeNews" class="btn btn-primary">Ver noticia</router-link>
          </div>
        </div>
        </div>
        </div>
        
        
      </li>
    </ul>
  </ul>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import axios from "axios";
import { useRouter } from "vue-router";
// import seeNews from "./seeNews.vue";
export default {
  // components:{seeNews},
  setup() {
     const router = useRouter();
    const noticiaIndex = ref({


    });
    let llego = ref(false);

    function check(index){
      noticiaIndex.value = index;
      console.log(index.NEWS_ID);
     // router.push({ path: "/Login" });
      router.push({ name: 'seeNews2', query: { newsId: index.NEWS_ID } })
    }

    let noticias = ref();
    onMounted(() => {
      /* aqui haces el get con axios*/
      /* haces: noticias = res.data.data*/
      /* console.log pa ber si jala*/

       axios
        .get(
          //"http://localhost:8070/piaBDMBack/piaBDMBack/includes/section_inc.php?action=selectSections",
          "http://archonnews.com/piaBDMBack/includes/news_inc.php?action=selectRecentNews",
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
            console.log(res);
            noticias.value = res.data[0];
            llego = true;

            
            //    }, 2000);
          }
        })
        .catch((error) => {
          console.log("Ocurrio un error en el servicio", error);
          //   setTimeout(() => {

          //  }, 2000);
        });
    })
    return {
      noticias,
      noticiaIndex, 
      check,
      llego,
    }
  }

}

    
</script>

<style scoped>
.carousel {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
}
.cardSecond {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  min-width: 300px;
}
.cardMain {
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.newNews {
  font-size: 60px;
}
.card-img-top {
  max-height: 250px;
}
</style>
