import {Pinia} from 'pinia'
import {useAppStore} from '../../../stores/AppStore/useAppStore'

export function markFirstRouteAsInitializedRouterHookFactory(pinia: Pinia) {
  return async function markFirstRouteAsInitializedRouterHook() {
    const appStore = useAppStore(pinia)
    if(!appStore.isFirstRouteInitialized) {
      appStore.isFirstRouteInitialized = true
    }
  }
}
