import { createRouter, createWebHistory } from 'vue-router'


import MainPage from '@/pages/Main.vue'
import AdminPanel from '../pages/AdminPanel/index.vue'
import Registration from '@/pages/Registration.vue'
import NotFound from '@/pages/NotFound.vue'
import Children from '@/pages/AdminPanel/Children.vue'
import Groups from '@/pages/AdminPanel/Groups.vue'
import Employees from '@/pages/AdminPanel/Employees.vue'
import Dashboard from '@/pages/AdminPanel/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/pages',
      name: 'pages',
      component: AdminPanel,
      children: [
        {
          path: 'dashboard', // catch-all inside /pages
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'children', // catch-all inside /pages
          name: 'children',
          component: Children,
        },
        {
          path: 'groups', // catch-all inside /pages
          name: 'groups',
          component: Groups,
        },
        {
          path: 'employees', // catch-all inside /pages
          name: 'employees',
          component: Employees,
        },
        {
          path: ':catchAll(.*)*', // catch-all inside /pages
          name: 'PagesNotFound',
          component: NotFound
        }
      ]
    },
    {
      path: '/sign',
      name: 'sign',
      component: Registration,
    }
  ],
})

// ✅ Navigation Guard
router.beforeEach((to, from, next) => {
  const publicPages = ['/sign', '/'];
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem('token');

  if (authRequired && !token) {
    return next('/sign');
  }

  next();
});


export default router
