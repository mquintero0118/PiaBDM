<template>
  <div class="card-header">{{ noticia.TITLE }}</div>
  <div class="card-body">
    <div class="d-flex flex-row bd-highlight mb-3">
      <div class="p-2 bd-highlight">{{ noticia.DATE_OF_EVENTS }}</div>
      <div class="p-2 bd-highlight">
        {{ noticia.CITY }} {{ noticia.STATE }} {{ noticia.COUNTRY }}
      </div>
    </div>
    <div class="d-flex justify-content-center"></div>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Imagen
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img
              v-bind:src="noticia.MEDIA"
              class="card-img-top cardImage"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Video
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <video width="600" height="400" controls v-if="showVideo">
              <source v-bind:src="video_path" />
            </video>
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr />
    <br />

    <p class="paragraph">
      {{ noticia.LEAD_TEXT }}
    </p>

    <p class="paragraph">
      {{ noticia.NEWS_TEXT }}
    </p>
    <br />
    <hr />
    <br />
    <div class="d-flex bd-highlight mb-3">
      <div class="p-2 bd-highlight stuff">{{ noticia.PUBLISHED_DATE }}</div>
      <div class="p-2 bd-highlight stuff">{{ noticia.SIGNATURE }}</div>

      <div class="ms-auto p-2 bd-highlight">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-info disable">
            {{ noticia.LIKES }}
          </button>
          <button type="button" class="btn btn-info" @click="like()">
            <i class="fas fa-heartbeat"></i> Like
          </button>
          <button type="button" class="btn btn-info" @click="share()">
            <i class="fa fa-share"></i>
            <ShareNetwork
              network="facebook"
              v-bind:url="noticiaUrl"
              title="Mira esta noticia en ArchonNews"
              hashtags="ArchonNews"
            >
              Compartir
            </ShareNetwork>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="card-footer">
    <div class="container-fluid">
      <div v-for="(comment, index) in comments" :key="index">
        <div class="d-flex justify-content-start">
          <h4>{{ comment.EMAIL }}</h4>
        </div>
        <div class="d-flex bd-highlight">
          <div class="bd-highlight">
            <h5>{{ comment.COMMENT_TEXT }}</h5>
          </div>
          <div class="ms-auto bd-highlight" v-if="store.state.user_type === 'Editor'">
            <button class="btn btn-danger" @click="deleteComment(comment.COMMENT_ID)"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
        <div class="d-flex justify-content-start">
          <h6>{{ comment.CREATION_DATE }}</h6>
        </div>
        <hr>
      </div>
      <br />
      <div
        v-if="store.state.name && store.state.user_type !== 'Editor'"
        class="input-group commentGroup"
      >
        <input
          type="text"
          v-model="commentText"
          class="form-control comment"
          placeholder="Escribe tu comentario"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />
        <div
          @click="createComment()"
          class="btn btn-success"
          id="btnGroupAddon"
        >
          Publicar comentario
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useStore } from "vuex";
const router = useRouter();
export default {
  props: ["query"],
  setup(props) {
    var noticiaUrl = "http://archonnews.com";
    const showVideo = ref(false);
    const noticia = ref("");
    const comments = ref("");
    const commentText = ref("");
    var video_path = ref("");
    const store = useStore();
    const data = ref(false);
    let showModal = ref(false);
    function like() {
      console.log("work");
      console.log(props.query);
      let newsId = props.query;
      console.log(newsId.newsId);
      var data = new FormData();
      data.append("newsId", newsId.newsId);
      axios
        .post(
          "http://archonnews.com/piaBDMBack/includes/news_inc.php?action=likeNews",
          data
        )
        .then((response) => {
          console.log(response);
        });

      axios
        .post(
          "http://archonnews.com/piaBDMBack/includes/news_inc.php?action=selectByNewsId",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              // "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
          console.log(response.data[0][0]);
          noticia.value = response.data[0][0];
          comments.value = response.data[1];
          console.log(comments.value);
          video_path.value = response.data[0][1].MEDIA;
          showVideo.value = true;
        });
    }
    function share() {}
    function modal() {
      showModal.value = !showModal.value;
      console.log(showModal.value);
    }
    function deleteComment(id){
      console.log(id)
    }
    function createComment() {
      let newsId = props.query;
      var data = new FormData();
      data.append("userId", store.state.user_id);
      data.append("newsId", newsId.newsId);
      data.append("comment", commentText.value);

      for (var pair of data.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      commentText.value = "";

      axios
        .post(
          "http://archonnews.com/piaBDMBack/includes/comments_inc.php?action=create",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              // "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
          console.log(response.data[0][0]);
          noticia.value = response.data[0][0];
          comments.value = response.data[1];
          console.log(comments.value);
          video_path.value = response.data[0][1].MEDIA;
          showVideo.value = true;
        });

      var data2 = new FormData();
      data2.append("newsId", newsId.newsId);
      axios
        .post(
          "http://archonnews.com/piaBDMBack/includes/news_inc.php?action=selectByNewsId",
          data2,
          {
            headers: {
              "Content-Type": "application/json",
              // "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
          console.log(response.data[0][0]);
          noticia.value = response.data[0][0];
          comments.value = response.data[1];
          console.log(comments.value);
          video_path.value = response.data[0][1].MEDIA;
          showVideo.value = true;
        });
    }

    watch();
    onMounted(() => {
      console.log("work");
      console.log(props.query);
      let newsId = props.query;
      console.log(newsId.newsId);
      var data = new FormData();

      data.append("newsId", newsId.newsId);

      for (var pair of data.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      axios
        .post(
          "http://archonnews.com/piaBDMBack/includes/news_inc.php?action=selectByNewsId",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              // "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response);
          console.log(response.data[0][0]);
          noticia.value = response.data[0][0];
          comments.value = response.data[1];
          console.log(comments.value);
          video_path.value = response.data[0][1].MEDIA;
          showVideo.value = true;
        });
    });
    return {
      showModal,
      modal,
      data,
      router,
      noticia,
      comments,
      video_path,
      showVideo,
      createComment,
      commentText,
      store,
      share,
      noticiaUrl,
      like,
      deleteComment,
    };
  },
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
