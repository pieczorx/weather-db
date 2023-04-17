import {Pinia} from 'pinia'
import {useAppStore} from '../../../../stores/AppStore/useAppStore'

export function startPageLoadingRouterHookFactory(pinia: Pinia) {
  return async function startPageLoadingRouterHook() {
    const appStore = useAppStore(pinia)
    appStore.isPageLoading = true
  }
}
