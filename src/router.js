import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import MovieDetails from './pages/MovieDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/movie/:id', component: MovieDetails }
]

const router = createRouter({
  history: createWebHashHistory(), // ✅ Use hash history here
  routes
})

export default router
