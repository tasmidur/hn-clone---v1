import Vue from "vue";

export default {
    SET_LIST: (state, { type, ids }) => {
      state.lists[type] = ids
    },
    SET_ACTIVE_TYPE:(state,{type})=>{
      state.activeType=type;
    },
    SET_ITEMS: (state, { items }) => {
      items.forEach(item => {
        if (item) {
          Vue.set(state.items,item.id,item);

        }
      })
    },
    SET_USER: (state, { id, user }) => {
      Vue.set(state.users, id, user || false)
      
    }

  }; 

  