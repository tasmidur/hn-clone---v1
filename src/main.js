import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { sync } from 'vuex-router-sync';
import * as filters from './util/filters';


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