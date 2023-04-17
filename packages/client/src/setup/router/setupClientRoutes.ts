import {RouteRecordRaw} from 'vue-router'
import {RouteName} from './enum/RouteName'

export function setupClientRoutes(): RouteRecordRaw[] {
  return [
    {
      path: '/',
      component: () => import('../../views/AppView.vue'),
      meta: {
        depth: 100,
      },
      children: [
        {
          path: '/',
          name: RouteName.Home,
          component: () => import('../../pages/HomePage/HomePage.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../../views/LandingView.vue'),
      meta: {
        depth: 100,
      },
      children: [
        {
          path: '',
          name: RouteName.NotFound,
          component: () => import('../../pages/NotFoundPage/NotFoundPage.vue'),
          meta: {
            order: 0,
          },
        },
      ],
    },
  ]
}
