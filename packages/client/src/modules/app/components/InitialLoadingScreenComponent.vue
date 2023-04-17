<script setup lang="ts">
import LogoComponent from '../../ui/components/LogoComponent.vue'
import LoadingComponent from '@pieczorx-weather/client/src/modules/ui/components/LoadingComponent.vue'
</script>

<template>
  <div class="initial-loading-screen">
    <LogoComponent isLoading/>
    <LoadingComponent/>
  </div>
</template>

<style scoped lang="scss">
.initial-loading-screen {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  z-index: 10000;
  background: hsl(0, 0%, 15%);
}

.logo {
  font-size: 36px;
}
</style>
