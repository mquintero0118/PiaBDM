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
        />
        <button type="button" class="btn btn-success">
          <i class="fa fa-search"></i> Buscar
        </button>
      </div>
    </div>
    <div class="card-body">
<div v-for="index in 3" :key="index" class="card mb-3 test" style="max-width: 5000px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./testImages/newspaper.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Titulo de la noticia</h5>
        <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque mi eget commodo maximus. Curabitur sed vestibulum libero. Donec lacinia imperdiet purus eget tempus. Donec ut porttitor arcu. Fusce imperdiet, magna quis lacinia semper, felis sapien sagittis risus, id malesuada mauris quam eu nisi. Cras tortor risus, dictum eu congue sed, convallis eu felis. Nullam ultricies efficitur euismod. Vestibulum vel lorem vel orci facilisis fermentum. Integer varius eget ligula ac lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
         <router-link to="/seeNews" class="btn btn-primary">Ver noticia</router-link>
      </div>
    </div>
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
