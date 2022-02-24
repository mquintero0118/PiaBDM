<template>
  <div class="card cardSearchNews">
    <div class="card-header">
      <div class="input-group">
        <input
          type="text"
          class="form-control search"
          placeholder="¿Que noticia buscas?"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />
        <button type="button" class="btn btn-success">
          <i class="fa fa-search"></i> Buscar
        </button>
      </div>
    </div>
    <div class="container-fluid">
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
</template>

<script>
export default {};
</script>

<style>
.cardSearchNews {
  width: 70%;
  max-width: 2000px;
  margin-left: 14%;
}
.search {
  margin-left: 0%;
}
</style>
