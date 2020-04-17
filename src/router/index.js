import Vue from 'vue'
import VueRouter from 'vue-router'
// import Left from '@components/left/Left.vue';
// import Right from '@components/right/Right.vue';

Vue.use(VueRouter)
const routes = [

  {
    path: '/left',
    name: 'left',
    component: () => import(/*webpackChunkName:'home' */'../components/left/Left.vue'),
    // 是否销毁页面（内存）
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/right',
    name: 'right',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/right/Right.vue'),
    meta: {
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;

