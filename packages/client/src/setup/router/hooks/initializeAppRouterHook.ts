import {useAppStore} from '../../../stores/AppStore/useAppStore'

export function initializeAppRouterHookFactory() {
  return async function initializeAppRouterHook() {
    const appStore = useAppStore()
    await appStore.initializeAppIfNotInitialized()
  }
}
