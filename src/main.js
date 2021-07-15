import Vue from 'vue'
import App from './App.vue'

import './assets/css/index.css';

Vue.config.productionTip = false

/**
 * prototypes
 */
import {Store} from './controllers/mainStore'

Vue.prototype.$store = Store;

new Vue({
  render: h => h(App),
}).$mount('#app')