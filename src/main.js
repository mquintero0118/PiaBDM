import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPhone);
const options = {
    // You can set your default options here
};

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.use(Toast, options)
.mount('#app')

