export default {
    getActiveItemIds(state){
        const { activeType, itemsPerPage, lists } = state
        if (!activeType) {
            return []
          }
          const numberOfPage = Number(state.route.params.page) || 1
          const start = (numberOfPage - 1) * itemsPerPage
          const end = numberOfPage * itemsPerPage
          return lists[activeType].slice(start, end)
       
    },
    getactiveItems (state, getters) { 
        return getters.getActiveItemIds.map(id => state.stories[id]).filter(_ => _);
      }
    
}