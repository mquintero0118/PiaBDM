<template>
  <div class="d-flex justify-content-center">
    <div class="card text-center">
      <div class="card-header">Editar Perfil</div>
      <div class="card-body">
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-shrink-1 bd-highlight">
            <div>
            <img src="./testImages/PP.jpg" class="img-thumbnail" alt="..." />
            </div>
            <div>
              <br>
            <label for="userE">Usuario </label>
            <input
            type="text"
            class="form-control"
            id="inputUserE"
            value="CovetousTag4"
          />
          </div>
          <div>
              <br>
            <label for="names">Tipo de perfil </label>
            <input
            type="text"
            class="form-control disabled"
            disabled
            value="Admin"
          />
          </div>
          </div>
          <div class="p-2 flex-grow-1 bd-highlight">
            <div>
              <br>
            <label for="email">Correo Electronico </label>
            <input
            type="text"
            class="form-control"
            id="inputEmailE"
            value="alex@gmail.com"
          />
          </div>
          <div>
              <br>
            <label for="names">Nombre(s) </label>
            <input
            type="text"
            class="form-control"
            id="inputNameE"
            value="Manuel Alejandro"
          />
          </div>
          <div>
              <br>
            <label for="lastName">Apellidos </label>
            <input
            type="text"
            class="form-control"
            id="inputLastnameE"
            value="Quintero Gutierrez"
          />
          </div>
          <div>
              <br>
            <label for="cellphone">Telefono </label>
            <input
            type="text"
            class="form-control"
            id="inputCellphone"
            value="8112148676"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
          </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="container">
          <div class="d-flex justify-content-around">
             <button type="button" class="btn btn-danger btnE">
              Resetear
            </button>
            <button type="button" class="btn btn-success btnE">
              Guardar cambios
            </button>
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
.img-thumbnail {
  max-width: 100px;
  max-height: 100px;
}
.disabled {
  color: grey;
}
.btnE {
  max-width: 60%;
  min-width: 30%;
  width: 30%;
}
</style>
