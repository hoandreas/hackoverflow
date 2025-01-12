import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterPage.vue')
  },
  {
    path: '/main',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage.vue'),
    children: [
      {
        path: 'question-list',
        name: 'question-list',
        component: () => import('../views/QuestionListPage.vue')
      },
      {
        path: 'question-details/:id',
        name: 'question-details',
        component: () => import('../views/QuestionDetailsPage.vue')
      },
      {
        path: 'user-homepage',
        name: 'user-homepage',
        component: () => import('../views/UserHomePage.vue')
      },
      {
        path: 'update-question/:id',
        name: 'update-question',
        component: () => import('../views/UpdateQuestionPage.vue')
      },
      {
        path: 'update-answer/:id',
        name: 'update-answer',
        component: () => import('../views/UpdateAnswerPage.vue')
      }
    ]
  },
  {
    path: '/postQuestion',
    name: 'post-question',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewQuestionPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
