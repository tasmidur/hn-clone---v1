import Vue from 'vue'
import VueRouter from 'vue-router'
import Userpage from "../views/UserPage.vue";
import ItemListView from "../views/ItemListView.vue";
Vue.use(VueRouter)

const createItemPage = id => () => import('../views/createItemPage').then(m => m.default(id))


const routes = [
    { path: '/top/:page(\\d+)?', component: createItemPage('top') },
    { path: '/new/:page(\\d+)?', component: createItemPage('new') },
    { path: '/show/:page(\\d+)?', component: createItemPage('show') },
    { path: '/ask/:page(\\d+)?', component: createItemPage('ask') },
    { path: '/job/:page(\\d+)?', component: createItemPage('job') },
    { path: '/item/:id(\\d+)', component: ItemListView },
    { path: '/user/:id',   name: "userview", component: Userpage },
    { path: '/', redirect: '/top' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
