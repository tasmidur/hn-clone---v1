import {
  fetchIdsByType,
  fetchItems,
} from '../api';

export default {
  FETCH_ITEM:function({commit,dispatch},{type}){
      commit("SET_ACTIVE_TYPE",{type});
      return fetchIdsByType(type)
      .then(ids => commit('SET_LIST', { type, ids }))
      .then(() => dispatch('IS_ACTIVE_ITEMS'))
  },
  IS_ACTIVE_ITEMS:function({ dispatch, getters }){
    return dispatch('FETCH_ITEMS', {
      ids: getters.getActiveItemIds
    })
  }, 
  FETCH_ITEMS: ({ commit, state }, { ids }) => {
    if (ids.length) {
      return fetchItems(ids)
      .then(items => commit('SET_ITEMS', { items }))
    } else {
      return Promise.resolve()
    }
  },
}
