import axios from "axios";

function fetch (type) {
    let base_url="https://hacker-news.firebaseio.com/v0/"+type;
    return axios.get(base_url).then(response => response.data)
}

export function fetchIdsByType (type) {
    return fetch(`${type}stories.json`);
} 

export function fetchItem (id) {
    return fetch(`item/${id}.json`);
  }
  
  export function fetchItems (ids) {
    return Promise.all(ids.map(id => fetchItem(id)))
  }
  export function fetchUser(id){
    return fetch(`user/${id}.json`);
  }

// recursively fetch all descendent comments
export function fetchComments(store, item) {
  if (item && item.kids) {
      return store.dispatch('FETCH_ITEMS', {
          ids: item.kids
      }).then(() => Promise.all(item.kids.map(id => {
          return fetchComments(store, store.state.items[id])
      })))
  }
}

export function watchList(type,cb){
  cb(fetch(`${type}stories.json`))
}