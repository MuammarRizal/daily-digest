import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.view.vue'
import CategoryView from '@/views/Category.view.vue'
import ProfileView from '@/views/Profile.view.vue'
import NewsView from '@/views/News.view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
  ],
})

export default router
