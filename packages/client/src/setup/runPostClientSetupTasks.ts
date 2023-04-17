import {Router} from 'vue-router'
import {Pinia} from 'pinia'
import {initializeAppRouterHookFactory} from './router/hooks/initializeAppRouterHook'
import {markFirstRouteAsInitializedRouterHookFactory} from './router/hooks/markFirstRouteAsInitializedRouterHook'
import {setTransitionNameRouterHookFactory} from './router/hooks/setTransitionNameRouterHook'
import {finishPageLoadingRouterHookFactory} from '@pieczorx-weather/client/src/setup/router/hooks/PageLoadingHooks/finishPageLoadingRouterHook'
import {startPageLoadingRouterHookFactory} from '@pieczorx-weather/client/src/setup/router/hooks/PageLoadingHooks/startPageLoadingRouterHook'

export function runPostClientSetupTasks(
  router: Router,
  pinia: Pinia,
) {
  router.beforeEach(startPageLoadingRouterHookFactory(pinia))
  router.beforeEach(initializeAppRouterHookFactory())
  router.afterEach(setTransitionNameRouterHookFactory())
  router.afterEach(markFirstRouteAsInitializedRouterHookFactory(pinia))
  router.afterEach(finishPageLoadingRouterHookFactory(pinia))
}
