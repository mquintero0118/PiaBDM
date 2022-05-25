import { createApp } from 'vue'
import App from './App.vue'
//import VueSession from "vue-session";
//createApp.use(VueSession);
import router from './router'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

//createApp.use(VueSession);
library.add(faPhone);
const options = {
    // You can set your default options here
};

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.component('Datepicker', Datepicker)
.use(router)
.use(Toast, options)
.mount('#app');