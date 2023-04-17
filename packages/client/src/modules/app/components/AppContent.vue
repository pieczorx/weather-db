<script setup lang="ts">
import {onBeforeUnmount, watch} from 'vue'
import {$computed, $ref} from 'vue/macros'
import PageLoadingBar from '@pieczorx-weather/client/src/modules/app/components/PageLoadingBar.vue'
import {useAppStore} from '@pieczorx-weather/client/src/stores/AppStore/useAppStore'
import InitialLoadingScreenComponent from '@pieczorx-weather/client/src/modules/app/components/InitialLoadingScreenComponent.vue'

const appStore = useAppStore()

onBeforeUnmount(() => {
  appStore.disposeApp()
})

let initialLoadingScreenTimeoutPassed = $ref(false)
setTimeout(() => {
  initialLoadingScreenTimeoutPassed = true
}, 1000)

const hasLoadingFinished = $computed(() => {
  return initialLoadingScreenTimeoutPassed && appStore.isFirstRouteInitialized
})
</script>

<template>
  <div class="app-content" :class="{'is-loading': appStore.shouldShowPageLoadingBar}">
    <Transition name="loading-screen">
      <InitialLoadingScreenComponent v-if="!hasLoadingFinished"/>
    </Transition>
    <RouterView v-if="hasLoadingFinished" v-slot="{Component, route}">
      <Transition
        :name="route.meta.transitionName"
        appear
        class="page-transition-position"
      >
        <Component :is="Component"/>
      </Transition>
    </RouterView>
    <PageLoadingBar v-if="appStore.shouldShowPageLoadingBar && hasLoadingFinished"/>
  </div>
</template>

<style scoped lang="scss">
.app-content {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  &.is-loading {
    opacity: 0.85;
    transition: all .1s ease-in;
    pointer-events: none;
  }
}

.page-transition-position {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}

.depth-transition-100-to-100 {
  &-enter-active,
  &-leave-active {
    transition: all 0.25s ease;
  }
  &-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }
  &-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
}

.initial-transition {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
    transition-delay: 0.25s;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
}

.loading-screen {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
