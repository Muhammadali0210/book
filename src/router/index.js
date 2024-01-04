import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registration from '../components/registration/Register.vue'
import Login from '../components/registration/Login.vue'
import AddBook from '../components/add-items/AddBook.vue'
import AddAuthor from '../components/add-items/AddAuthor.vue'
import Profile from '../components/profile/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Registration
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/book',
      name: 'book',
      component: AddBook
    },
    {
      path: '/author',
      name: 'author',
      component: AddAuthor
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router
