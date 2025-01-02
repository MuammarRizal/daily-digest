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
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: HomeView,
    },
    {
      path: '/category',
      name: 'Category',
      component: CategoryView,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
    },
    {
      path: '/news',
      name: 'News',
      component: NewsView,
    },
  ],
})

export default router
