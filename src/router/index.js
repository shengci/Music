import Vue from 'vue'
import VueRouter from 'vue-router'
import recommend from './recommend'
import hotSong from './hotSong'
import search from './search'
import listDetails from './listDetails'


Vue.use(VueRouter)

  const routes = [
    recommend,
    hotSong,
    search,
    listDetails,
    {
      path:'/*',
      redirect:'/recommend'
    }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base:'music',
  routes
})

export default router
