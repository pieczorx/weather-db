<script setup lang="ts">
import LoadingComponent from '@pieczorx-weather/client/src/modules/ui/components/LoadingComponent.vue'
import WeatherMeasurementList from '@pieczorx-weather/client/src/modules/weather/components/WeatherMeasurementList.vue'
import EmptyList from '@pieczorx-weather/client/src/modules/weather/components/EmptyListComponent.vue'
import {onMounted} from 'vue'
import {
  useWeatherMeasurementStore,
} from '@pieczorx-weather/client/src/stores/WeatherMeasurementStore/useWeatherMeasurementStore'
import FillMiddleComponent from '@pieczorx-weather/client/src/modules/ui/components/FillMiddleComponent.vue'


const weatherMeasurementStore = useWeatherMeasurementStore()

const refreshWeatherMeasurements = async () => {
  await weatherMeasurementStore.fetchMeasurements(true)
}

onMounted(() => {
  weatherMeasurementStore.fetchMeasurements()
})
</script>

<template>
  <FillMiddleComponent v-if="weatherMeasurementStore.isFetchingWeatherMeasurements || !weatherMeasurementStore.weatherMeasurements">
    <LoadingComponent/>
  </FillMiddleComponent>
  <template v-else>
    <WeatherMeasurementList v-if="weatherMeasurementStore.weatherMeasurements.length" :weatherMeasurements="weatherMeasurementStore.weatherMeasurements"/>
    <EmptyList v-else title="No measurements found in database" @refreshClick="refreshWeatherMeasurements"/>
  </template>
</template>
