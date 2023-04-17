<script setup lang="ts">
import ViewportCenterComponent from '@pieczorx-weather/client/src/modules/ui/components/ViewportCenterComponent.vue'
import ButtonComponent from '@pieczorx-weather/client/src/modules/ui/components/ButtonComponent.vue'
import {useWeatherApiStore} from '@pieczorx-weather/client/src/stores/api/WeatherApiStore/useWeatherApiStore'
import {$ref} from 'vue/macros'
import {
  WeatherProviderType,
} from '@pieczorx-weather/server/src/services/WeatherProviderService/enum/WeatherProviderType'
import WeatherMeasurementsContainer
  from '@pieczorx-weather/client/src/modules/weather/containers/WeatherMeasurementsContainer.vue'
import {
  useWeatherMeasurementStore,
} from '@pieczorx-weather/client/src/stores/WeatherMeasurementStore/useWeatherMeasurementStore'

const weatherApiStore = useWeatherApiStore()
const weatherMeasurementStore = useWeatherMeasurementStore()

const cityName = $ref<string>('')
let isWeatherMeasurementInProgress = $ref<boolean>(false)


const createWeatherMeasurement = async () => {
  isWeatherMeasurementInProgress = true
  try {
    const response = await weatherApiStore.createWeatherMeasurement(cityName, WeatherProviderType.OpenWeatherMap)
    weatherMeasurementStore.addMeasurement(response.weatherMeasurement)
  } finally {
    isWeatherMeasurementInProgress = false
  }
}
</script>

<template>
  <section>
    <ViewportCenterComponent>
      <h1 class="title">
        Check for weather in <span class="underscore">any&nbsp;city</span>
      </h1>
      <div class="form">
        <input class="textbox" placeholder="Enter city name" v-model="cityName"/>
        <ButtonComponent class="go-button" :isLoading="isWeatherMeasurementInProgress" @click="createWeatherMeasurement">Go</ButtonComponent>
      </div>
    </ViewportCenterComponent>
  </section>
  <section>
    <ViewportCenterComponent>
      <h2>
        Recent measurements
      </h2>
      <WeatherMeasurementsContainer/>
    </ViewportCenterComponent>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as variables;

h1 {
  font-weight: 800;
  font-size: 64px;
  text-align: center;
}

h2 {

}

.underscore {
  border-bottom: 5px solid map-get(variables.$colors, theme);
  color: map-get(variables.$colors, theme);
}

.form {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
}

.textbox {
  border-radius: variables.$borderRadius;
  border: none;
  outline: none;
  background: hsl(0deg 0% 100% / 10%);
  font-size: 28px;
  font-weight: 600;
  padding: 0 20px;
  color: inherit;
  height: 64px;
}

.button {
  width: 128px;
  font-size: 28px;
  font-weight: 600;
}
</style>
