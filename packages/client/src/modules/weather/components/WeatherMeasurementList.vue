<script setup lang="ts">
import {
  IWeatherMeasurementResponseEntity,
} from '@pieczorx-weather/server/src/adapters/ApiResponseEntityAdapter/types/responseEntities/IWeatherMeasurementResponseEntity'
import WeatherMeasurementItem from '@pieczorx-weather/client/src/modules/weather/components/WeatherMeasurementItem.vue'

interface Props {
  weatherMeasurements: IWeatherMeasurementResponseEntity[]
}

const props = defineProps<Props>()

</script>

<template>
  <div class="weather-measurement-list">
    <TransitionGroup name="list-transition">
      <WeatherMeasurementItem
        v-for="weatherMeasurement in props.weatherMeasurements"
        :weatherMeasurement="weatherMeasurement"
        :key="weatherMeasurement.id"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
.weather-measurement-list {
  display: grid;
  gap: 10px;
}

.list-transition {
  &-enter-active,
  &-leave-active {
    transition: all 0.25s ease;
  }
  &-enter-from {
    opacity: 0;
    transform: translateY(-10px);
  }
  &-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
