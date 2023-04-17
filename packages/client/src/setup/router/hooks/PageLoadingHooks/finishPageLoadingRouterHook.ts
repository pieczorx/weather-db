import {Pinia} from 'pinia'
import {useAppStore} from '../../../../stores/AppStore/useAppStore'

export function finishPageLoadingRouterHookFactory(pinia: Pinia) {
  return async function finishPageLoadingRouterHook() {
    const appStore = useAppStore(pinia)
    appStore.isPageLoading = false
  }
}
