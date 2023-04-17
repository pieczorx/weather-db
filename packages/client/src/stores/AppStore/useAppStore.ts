import {defineStore} from 'pinia'
import {IAppStoreState} from './types/IAppStoreState'

export const useAppStore = defineStore('appStore', {
  state: () => {
    return {
      isAppLoaded: false,
      isFirstRouteInitialized: false,
      isPageLoading: true,
    } as IAppStoreState
  },
  getters: {
    shouldShowPageLoadingBar(state) {
      return state.isAppLoaded && state.isPageLoading
    },
  },
  actions: {
    async initializeAppIfNotInitialized(): Promise<void> {
      if(this.isAppLoaded) {
        return
      }
      await this.initializeApp()
    },

    async initializeApp(): Promise<void> {
      this.isAppLoaded = true
    },

    disposeApp(): void {
      this.isAppLoaded = false
      this.isFirstRouteInitialized = false
    },
  },
})
