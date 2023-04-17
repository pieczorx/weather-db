<script setup lang="ts">
import {useRoute} from 'vue-router'
import LandingLayout from '@pieczorx-weather/client/src/layouts/LandingLayout.vue'

const route = useRoute()
const workspaceName = route.params.workspaceName
</script>

<template>
  <LandingLayout>
    <RouterView :key="workspaceName"/>
  </LandingLayout>
</template>
