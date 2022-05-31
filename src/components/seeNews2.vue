<template>
  <div v-if="data">
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
              <h4>Persona comentario 1</h4>
            </div>
            <div class="d-flex justify-content-start">
              <h5>Texto Comentario 1</h5>
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
</template>

<script>
import {  onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
 const router = useRouter();
export default {
  props: ['query'],
  setup(props){
      const data = ref(false)
    let showModal = ref(false);
    function modal () {
      showModal.value = !showModal.value;
      console.log(showModal.value);
    }
    onMounted(() => {
        console.log('work')
        console.log(props.query);
        let newsId = props.query
        axios.post("http://localhost/piaBDMBack/includes/news_inc.php?action=selectByNewsId", newsId ).then((response) => {
            console.log(response)
        })

    })
    return{
      showModal,
      modal,
      data,
      router,
    }
  }
};
</script>

<style>
.modal-lg {
  width: 70% !important;
}
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
