import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const createItemPage = id => () => import('../views/createItemPage').then(m => m.default(id))


const routes = [
    { path: '/top/:page(\\d+)?', component: createItemPage('top') },
    { path: '/new/:page(\\d+)?', component: createItemPage('new') },
    { path: '/show/:page(\\d+)?', component: createItemPage('show') },
    { path: '/ask/:page(\\d+)?', component: createItemPage('ask') },
    { path: '/job/:page(\\d+)?', component: createItemPage('job') },
    { path: '/', redirect: '/top' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
