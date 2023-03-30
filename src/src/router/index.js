import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    
    {
      path: '/home',
      component: HomeView,
    },
    // add a catch-all route to redirect to the home page if an invalid path is entered
    {
      path: '/*',
      redirect: '/',
    },
  ]
})

export default router
