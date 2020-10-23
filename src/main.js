import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { sync } from 'vuex-router-sync';
import * as filters from './util/filters';
import VueProgressBar from 'vue-progressbar';

const options = {
  color: '#ffca2b',
  failedColor: '#ff0000',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false;

sync(store, router);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");