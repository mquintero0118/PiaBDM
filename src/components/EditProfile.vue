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
            <label for="names">Tipo de perfil </label>
            <input
            type="text"
            class="form-control disabled"
            v-model="userTypeV"
            disabled
            
            
          />
          </div>
          </div>
          <div class="p-2 flex-grow-1 bd-highlight">
            <div>
              <br>
            <label for="email"> Correo Electronico </label>
            <input
            type="text"
            class="form-control"
            v-model="emailV"
            id="inputEmailE"
            @change="changeData"
          />
          </div>
          <div>
              <br>
            <label for="names">Nombre(s) </label>
            <input
            type="text"
            class="form-control"
             v-model="nameV"
            id="inputNameE"   
            @change="changeData"         
          />
          </div>
          <div>
              <br>
            <label for="lastName">Apellidos </label>
            <input
            type="text"
            class="form-control"
             v-model="lastNameV"
            id="inputLastnameE"
            @change="changeData"
            
          />
          </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="container">
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-success btnE" @click="editUser" :disabled="dataChanged">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
export default{
  
setup() {
  const dataChanged = ref(true)
const store = useStore();
const emailV = ref();
const nameV = ref();
const lastNameV = ref();
const userTypeV = ref();

onMounted(() =>{
  emailV.value = store.state.email
  nameV.value = store.state.name
  lastNameV.value = store.state.last_name
  userTypeV.value = store.state.user_type
})

function editUser () {
  store.state.email = emailV.value;
  store.state.name = nameV.value;
  store.state.last_name = lastNameV.value;

  var data = new FormData();
  data.append("email", emailV.value)
  data.append("name", nameV.value)
  data.append("last_name", lastNameV.value)
  for(var pair of data.entries()) {
   console.log(pair[0]+ ', '+ pair[1]); 
}
}
function changeData () {
  dataChanged.value = false;
}

return{
emailV,
nameV,
lastNameV,
userTypeV,
store,
editUser,
changeData,
dataChanged
};

}
};
</script>

<style scoped>
.img-thumbnail {
  max-width: 100px;
  max-height: 100px;
}
.disabled {
  color: grey;
}
.btnE {
  max-width: 30%;
  min-width: 30%;
  width: 30%;
  margin-right: 10%;
}
</style>
