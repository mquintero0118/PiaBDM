<template>
  <div class="d-flex">
    <div class="card">
      <div class="card-header">Crear Noticia</div>
      <div class="card-body">
        <div class="container">
          <div class="row">
            <div class="col">
              <div>
                <label for="title">Titulo de la noticia </label>
                <input type="text" class="form-control" />
              </div>
              <br />
              <div>
                <label for="desc">Descripción de la noticia </label>
                <textarea type="text" class="form-control" />
              </div>
              <br />
              <div>
                <label for="text">Texto de la noticia </label>
                <textarea type="text" class="form-control" />
              </div>
              <br />
              <div>
                <label for="place">Lugar de los hechos </label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col">
              <div>
                <label for="formFileMultiple" class="form-label"
                  >Imagenes</label
                >
                <input
                  class="form-control"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  id="formFileMultiple"
                  multiple
                />
              </div>
              <br>
              <div>
                <label for="formFile" class="form-label"
                  >Videos</label
                >
                <input
                  class="form-control"
                  type="file"
                  accept="video/mp4"
                  id="formFileMultiple"
                  multiple
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="container">
          <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-primary btnE">
              En Redaccion
            </button>
            <button type="button" class="btn btn-primary btnE">
              Terminar Noticia
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
</template>

<script>
export default {};
</script>

<style>
.btnE {
  max-width: 170px;
  min-width: 15%;
}
.card {
  width: 70% !important;
  max-width: 70% !important;
  margin-left: 16%;
}
</style>
