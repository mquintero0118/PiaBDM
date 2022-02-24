<template>
  <div class="card cardseeNews">
    <div class="card-header">Titulo de la noticia</div>
    <div class="card-body">
      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Fecha de la noticia</div>
        <div class="p-2 bd-highlight">Lugar del acontecimiento</div>
      </div>
      <img
        src="./testImages/archonNewsBanner.png"
        class="card-img-top cardImage"
        alt="..."
      />
      <br />
      <br />
      <br />
      <p class="paragraph">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum."
      </p>

      <p class="paragraph">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum."
      </p>

      <div class="d-flex bd-highlight mb-3">
        <div class="p-2 bd-highlight stuff">Fecha de publicacion</div>
        <div class="p-2 bd-highlight stuff">Firma del reportero</div>

        <div class="ms-auto p-2 bd-highlight">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" class="btn btn-info disable">6</button>
            <button type="button" class="btn btn-info">
              <i class="fas fa-heartbeat"></i> Like
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="container-fluid">
        <div>
          <div class="d-flex justify-content-start">
            <h3>Persona comentario 1</h3>
          </div>
          <div class="d-flex justify-content-start">
            <h5>Texto Comentario 1</h5>
          </div>
        </div>
        <br />
        <div>
          <div class="d-flex justify-content-start">
            <h3>Persona comentario 2</h3>
          </div>
          <div class="d-flex justify-content-start">
            <h5>Texto Comentario 2</h5>
          </div>
        </div>
        <br />
        <div class="input-group commentGroup">
          <input
            type="text"
            class="form-control comment"
            placeholder="Escribe tu comentario"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
          />
          <div class="btn btn-success" id="btnGroupAddon">
            Publicar comentario
          </div>
        </div>
      </div>
    </div>
  </div>
  <br>
  <br>
  <h1>Noticias Relacionadas</h1>
  <div class="d-flex justify-content-center">
  <div class="d-flex flex-wrap">
<div v-for="index in 4" :key="index" class="card cardSecond" style="width: 10rem">
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
  <br />
</template>

<script>
export default {};
</script>

<style>
.cardseeNews {
  width: 90%;
  max-width: 2000px;
  margin-left: 5%;
}
.card-body {
  width: 100% !important;
}
.cardImage {
  max-width: 30%;
}
.paragraph {
  max-width: 70%;
  margin-left: 17%;
}
.card-footer {
  max-height: 2000px;
}
.commentGroup {
  margin-left: 0%;
  width: 100%;
}
.comment {
  margin-left: 0%;
}
.stuff {
  margin-top: 10px;
}
.disable:hover {
  color: #FFFEFE;
    background-color: #00B2B2;
    border-color: #00B2B2;
}
.disable:activeq {
  color: #FFFEFE;
    background-color: #00B2B2;
    border-color: #00B2B2;
}
</style>
