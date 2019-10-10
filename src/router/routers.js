import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Things from '../pages/Things/Things.vue'
import Shopcar from '../pages/Shopcar/shopcar.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'

export default [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/things",
    component: Things
  },
  {
    path: "/shopcar",
    component: Shopcar
  },
  {
    path: "/personal",
    component: Personal
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/",
    redirect: "/home"
  }
]
