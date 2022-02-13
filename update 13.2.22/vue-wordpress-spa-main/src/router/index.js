import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue')
  },
  {      path: '/pages',
    name: 'Pages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages.vue')
  },
       { // Assuming you're using the default permalink structure for posts
      path: '/pages/:pageSlug',
      name: 'Page',
    component: () => import(/* webpackChunkName: "posts" */ '../components/Page/Page.vue')
    },
     { // Assuming you're using the default permalink structure for posts
      path: '/posts/:postSlug',
      name: 'Post',
    component: () => import(/* webpackChunkName: "posts" */ '../components/Post/Post.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
