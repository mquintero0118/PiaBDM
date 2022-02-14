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
<div v-for="index in 3" :key="index" class="card cardMain" style="width: 18rem">
          <img src="./testImages/PP.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Club Penguin cerrara sus puertas</h5>
            <p class="card-text">
              Despues de una larga vida, Club Penguin cerrar sus puertas al publico...
            </p>
            <router-link to="/login" class="btn btn-primary">Ver noticia</router-link>
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
<div v-for="index in 3" :key="index" class="card cardSecond" style="width: 10rem">
          <img src="./testImages/newspaper.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">El mejor portal de noticias</h5>
            <p class="card-text">
              Archon News fue premiado como el mejor portal para noticias en el mundo...
            </p>
            <router-link to="/login" class="btn btn-primary">Ver noticia</router-link>
          </div>
        </div>
        </div>
        
      </li>
    </ul>
  </ul>
</template>

<script>
export default {};
</script>

<style>
.carousel {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
}
.cardSecond {
  margin-left: 15px;
  margin-right: 15px;
  min-width: 300px;
}
.cardMain {
  margin-left: 35px;
  margin-right: 35px;
}
.newNews {
  font-size: 60px;
}
</style>
