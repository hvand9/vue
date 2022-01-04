import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Connect.vue'
import Events from '../components/Events.vue'
import Profil from '../components/Profil.vue'
import Chat from '../components/Chat.vue'





const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
