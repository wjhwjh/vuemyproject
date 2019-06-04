import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods'
import seller from '../components/sellers/seller'
import ratingselect from '../components/ratingselect/ratingselect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/seller',
      component:seller
    },
    {
      path:'/ratingselect',
      component:ratingselect
    }
  ]
})
