<template>
  <div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Ver Noticia
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<div class="card-header">{{noticia.TITLE}}</div>
      <div class="card-body">
        <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-2 bd-highlight">{{noticia.DATE_OF_EVENTS}}</div>
          <div class="p-2 bd-highlight">{{noticia.CITY}} {{noticia.STATE}} {{noticia.COUNTRY}} </div>
        </div>
        <img
           v-bind:src="noticia.MEDIA"
          class="card-img-top cardImage"
          alt="..."
        />
        <br />
        <br />
        <br />
        <p class="paragraph">
         {{noticia.LEAD_TEXT}}
        </p>

        <p class="paragraph">
          {{noticia.NEWS_TEXT}}
        </p>

        <div class="d-flex bd-highlight mb-3">
          <div class="p-2 bd-highlight stuff">{{noticia.PUBLISHED_DATE}}</div>
          <div class="p-2 bd-highlight stuff">{{noticia.SIGNATURE}}</div>

          <div class="ms-auto p-2 bd-highlight">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" class="btn btn-info disable">{{noticia.LIKES}}</button>
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
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <h6>{{noticia.NEWS_ID}}</h6>
      </div>
    </div>
  </div>
</div>


    
   
  </div>
</template>

<script>
import {  ref } from "vue";
export default {
  props: ['noticia'],
  setup(){
    let showModal = ref(false);
    function modal () {
      showModal.value = !showModal.value;
      console.log(showModal.value);
    }
    
    return{
      showModal,
      modal,
    }
  }
};
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
  color: #fffefe;
  background-color: #00b2b2;
  border-color: #00b2b2;
}
.disable:activeq {
  color: #fffefe;
  background-color: #00b2b2;
  border-color: #00b2b2;
}
</style>
