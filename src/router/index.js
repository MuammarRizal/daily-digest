import { createRouter, createWebHistory } from 'vue-router'
import CategoryView from '@/views/Category.view.vue'
import ProfileView from '@/views/Profile.view.vue'
import NewsView from '@/views/News.view.vue'
import DetailCategoryView from '@/views/DetailCategory.view.vue'
import DashboardLayout from '@/layouts/admin/Dashboard.layout.vue'
import DashboardView from '@/views/Dashboard.view.vue'
import LandingPageLayout from '@/layouts/public/LandingPage.layout.vue'
import LandingPageView from '@/views/LandingPage.view.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // untuk user yang sudah login / admin
  routes: [
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: DashboardView,
        },
        {
          path: 'category',
          name: 'Category',
          component: CategoryView,
        },
        {
          path: 'profile',
          name: 'Profile',
          component: ProfileView,
        },
        {
          path: 'news',
          name: 'News',
          component: NewsView,
        },
        {
          path: 'category/:name',
          name: 'category-list',
          component: DetailCategoryView,
        },
      ],
    },

    //  untuk user yang belum login / public layout
    {
      path: '/',
      component: LandingPageLayout,
      children: [
        {
          path: '/',
          name: 'LandingPage',
          component: LandingPageView,
        },
      ],
    },
  ],
})

export default router
