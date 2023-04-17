<script setup lang="ts">
import {useRoute} from 'vue-router'
import AppLayout from '@pieczorx-weather/client/src/layouts/AppLayout.vue'

const route = useRoute()
const workspaceName = route.params.workspaceName
</script>

<template>
  <AppLayout>
    <RouterView :key="workspaceName"/>
  </AppLayout>
</template>
