import { createApp } from 'vue';
import App from './App.vue';

// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar)
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
