import Vuex from "vuex";
import Vue from "vue";
import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeType:null,
    itemsPerPage:20,
    stories:{},
    lists: {
      top: [],
      new: [],
      show: [],
      ask: [],
      job: []
    },
  },
  mutations,
  actions,
  getters
});