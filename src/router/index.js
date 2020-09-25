import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favourites',
    name: 'favourite-images',
    component: () => import(/* webpackChunkName: "favourites" */ '../views/FavouriteImages.vue')
  },
  {
    path: '/image/:id',
    name: 'image-details',
    component: () => import(/* webpackChunkName: "image" */ '../views/ImageDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
