<template>

  <div class="card text-center cardSearchNews">
    <div class="card-header ">
      <div class="input-group">
        <input
          type="text"
          class="form-control search"
          placeholder="¿Que noticia buscas?"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
          v-model="word"
        />
        <button type="button" class="btn btn-success" @click="search()" v-if="word">
          <i class="fa fa-search"></i> Buscar
        </button>
      </div>
    </div>
    <div class="card-body">
<div v-for="(noticia, index) in noticias" :key="index" class="card mb-3 test" style="max-width: 5000px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img v-bind:src="noticia.MEDIA" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{noticia.TITLE}}</h5>
        <p class="card-text">
           {{noticia.LEAD_TEXT}} </p>
         
      </div>
    </div>
  </div>
</div>
    </div>
        
    
    
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
 import axios from 'axios'
export default {
  setup() {
    const word = ref();
    const noticias = ref();
    function search(){
      var data = new FormData();
      data.append("searchText", word.value);
      axios.post("http://archonnews.com/piaBDMBack/includes/search_inc.php?action=searchByLeadText", data).then((response) => {
        console.log(response)
        noticias.value = response.data[0]
        console.log(noticias.value)
      })
    }

    return {
      search,
      word,
      noticias,
    }
  }
};
</script>

<style scoped>
.img-fluid{
  max-height: 200px;
}
.cardSearchNews {
  width: 70%;
  max-width: 2000px;
  margin-left: 14%;
  margin-bottom: 40px;
}
.search {
  margin-left: 0%;
}
.form-control::placeholder{
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
