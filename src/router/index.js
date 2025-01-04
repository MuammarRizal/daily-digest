import { createRouter, createWebHistory } from 'vue-router'
import CategoryView from '@/views/admin/Category.view.vue'
import ProfileView from '@/views/admin/Profile.view.vue'
import NewsView from '@/views/admin/News.view.vue'
import DetailCategoryView from '@/views/admin/DetailCategory.view.vue'
import DashboardLayout from '@/layouts/admin/Dashboard.layout.vue'
import DashboardView from '@/views/admin/Dashboard.view.vue'
import LandingPageLayout from '@/layouts/public/LandingPage.layout.vue'
import LandingPageView from '@/views/public/LandingPage.view.vue'
import NotFoundView from '@/views/error/NotFound.view.vue'
import LoginView from '@/views/auth/Login.view.vue'
import RegisterView from '@/views/auth/Register.view.vue'

const login = true

const AuthRequired = (to, from, next) => {
  if (!login) {
    alert('Login dulu browwww')
    next({
      name: 'Login',
    })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // untuk user yang sudah login / admin
  routes: [
    {
      path: '/dashboard',
      component: DashboardLayout,
      beforeEnter: AuthRequired,
      children: [
        {
          path: './',
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
          path: '',
          name: 'LandingPage',
          component: LandingPageView,
        },
        {
          path: 'login',
          name: 'Login',
          component: LoginView,
        },
        {
          path: 'register',
          name: 'Register',
          component: RegisterView,
        },
      ],
    },

    // Not Found
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

export default router
