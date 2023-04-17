import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'

export function setupRouter(routes: RouteRecordRaw[]): Router {
  const history = createWebHistory()

  return createRouter({
    history,
    routes,
  })
}
