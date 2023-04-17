<script setup lang="ts">
import {
  IWeatherMeasurementResponseEntity,
} from '@pieczorx-weather/server/src/adapters/ApiResponseEntityAdapter/types/responseEntities/IWeatherMeasurementResponseEntity'
import {$computed} from 'vue/macros'
import WeatherMeasurementDataItem
  from '@pieczorx-weather/client/src/modules/weather/components/WeatherMeasurementDataItem.vue'

interface Props {
  weatherMeasurement: IWeatherMeasurementResponseEntity
}

const props = defineProps<Props>()

const dataItems = $computed(() => {
  return [
    {
      title: 'Temp',
      value: props.weatherMeasurement.weatherData.temperature,
      suffix: '°F',
    },
    {
      title: 'Wind',
      value: props.weatherMeasurement.weatherData.windSpeed,
      suffix: 'km/h',
    },
    {
      title: 'Humid',
      value: props.weatherMeasurement.weatherData.humidity,
      suffix: '%',
    },
    {
      title: 'Press',
      value: props.weatherMeasurement.weatherData.pressure,
      suffix: 'st',
    },
  ]
})
</script>

<template>
  <div class="weather-measurement-item">
    <div class="city-name">{{props.weatherMeasurement.cityName}}</div>
    <div class="data">
      <WeatherMeasurementDataItem
        v-for="dataItem in dataItems"
        :title="dataItem.title"
        :value="dataItem.value"
        :suffix="dataItem.suffix"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../../styles/variables' as variables;

.weather-measurement-item {
  background: hsl(0deg 0% 100% / 10%);
  border-radius: variables.$borderRadius;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.city-name {
  font-size: 24px;
  font-weight: 600;
}

.data {
  display: flex;
  gap: 30px;
}
</style>
