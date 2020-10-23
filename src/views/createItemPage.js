import Home from './Home.vue';


const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)


export default function createItemPage (type) {
  console.log('page_url',type);
  return {
    name: `${type}-stories-view`,
    asyncData ({ store }) {
      return store.dispatch('FETCH_LIST_DATA', { type })
    },

    title: camelize(type),
    
    render (h) {
        
          return h(Home, { props: { type }})
        
       
      
     
    }
  }
}