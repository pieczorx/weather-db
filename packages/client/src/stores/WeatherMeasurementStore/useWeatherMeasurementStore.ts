import {defineStore} from 'pinia'
import {IWeatherMeasurementStoreState} from './types/IWeatherMeasurementStoreState'
import {
  IWeatherMeasurementResponseEntity,
} from '@pieczorx-weather/server/src/adapters/ApiResponseEntityAdapter/types/responseEntities/IWeatherMeasurementResponseEntity'
import {useWeatherApiStore} from '@pieczorx-weather/client/src/stores/api/WeatherApiStore/useWeatherApiStore'

export const useWeatherMeasurementStore = defineStore('weatherMeasurementStore', {
  state: () => {
    return {
      weatherMeasurements: null,
      isFetchingWeatherMeasurements: false,
    } as IWeatherMeasurementStoreState
  },
  actions: {
    addMeasurement(weatherMeasurement: IWeatherMeasurementResponseEntity): void {
      this.weatherMeasurements = [weatherMeasurement].concat(this.weatherMeasurements)
    },

    async fetchMeasurements(force = false): Promise<IWeatherMeasurementResponseEntity[]> {
      const weatherApiStore = useWeatherApiStore()
      if(this.weatherMeasurements && !force) {
        return
      }
      this.isFetchingWeatherMeasurements = true
      try {
        const response = await weatherApiStore.getWeatherMeasurements()
        this.weatherMeasurements = response.weatherMeasurements
      } finally {
        this.isFetchingWeatherMeasurements = false
      }

    },
  },
})
