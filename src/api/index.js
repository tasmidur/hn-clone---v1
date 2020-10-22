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

export function watchList(type,cb){
  cb(fetch(`${type}stories.json`))
}