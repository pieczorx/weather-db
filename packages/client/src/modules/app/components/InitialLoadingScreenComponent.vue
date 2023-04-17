<script setup lang="ts">
import LogoComponent from '../../ui/components/LogoComponent.vue'
import LoadingComponent from '@pieczorx-weather/client/src/modules/ui/components/LoadingComponent.vue'

interface Props {
  alertText?: string
}
const props = withDefaults(defineProps<Props>(), {
  alertText: null,
})
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

.protip {
  position: fixed;
  bottom: 30px;
  background: rgb(255 255 255 / 10%);
  padding: 5px 15px;
  border-radius: 30px;
}
</style>
