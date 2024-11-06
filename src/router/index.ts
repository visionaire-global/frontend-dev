import { createRouter, createWebHistory } from 'vue-router'
import Profile from '@/views/Profile.vue'
import ProfileDark from '@/views/ProfileDark.vue'

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/profile-dark',
    name: 'profile dark',
    component: ProfileDark,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router