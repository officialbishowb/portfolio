import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SuccessFormView from '../views/SuccessFormView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/success-form',
      name: 'Success Form',
      component: SuccessFormView,
    },
    {
      path: '/:catchAll(.*)', // Catch-all route for invalid paths
      redirect: '/',
    },
  ],
});

export default router;
