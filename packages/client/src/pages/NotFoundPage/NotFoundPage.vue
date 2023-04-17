<script setup lang="ts">
import {RouteName} from '../../setup/router/enum/RouteName'
import ButtonComponent from '@pieczorx-weather/client/src/modules/ui/components/ButtonComponent.vue'
</script>

<template>
  <div class="not-found-page">
    <div>
      <span class="title">404</span>
      <RouterLink :to="{name: RouteName.Home}">
        <ButtonComponent>Go home</ButtonComponent>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

a {
  text-decoration: none;
}

.button {
  padding: 10px 15px;
  font-size: 24px;
  font-weight: 600;
}
.title {
  font-size: 64px;
  font-weight: 600;
}
</style>
