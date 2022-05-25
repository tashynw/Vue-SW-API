import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from '@/views/CardView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: {
      filmsData: Array
    }
  },
  {
    path: '/:id',
    name: 'card',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
