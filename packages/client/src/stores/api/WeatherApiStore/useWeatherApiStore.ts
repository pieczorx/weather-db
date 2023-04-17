import {defineStore} from 'pinia'
import {useApiRequestStore} from '../../ApiRequestStore/useApiRequestStore'
import {
  IGetWeatherMeasurementsRequestInterfaces,
} from '@pieczorx-weather/server/src/controllers/WeatherController/validators/GetWeatherMeasurements/types/IGetWeatherMeasurementsRequestInterfaces'
import {WeatherProviderType} from '@pieczorx-weather/server/src/services/WeatherProviderService/enum/WeatherProviderType'
import {
  ICreateWeatherMeasurementRequestInterfaces,
} from '@pieczorx-weather/server/src/controllers/WeatherController/validators/CreateWeatherMeasurement/types/ICreateWeatherMeasurementRequestInterfaces'
import {
  IWeatherMeasurementResponseEntity,
} from '@pieczorx-weather/server/src/adapters/ApiResponseEntityAdapter/types/responseEntities/IWeatherMeasurementResponseEntity'
import {IToJson} from '@pieczorx-weather/client/src/types/IToJson'

export const useWeatherApiStore = defineStore('workspaceApi', {
  actions: {
    async getWeatherMeasurements(): Promise<IGetWeatherMeasurementsRequestInterfaces['response']> {
      const apiRequestStore = useApiRequestStore()
      const {weatherMeasurements} = await apiRequestStore.get<IGetWeatherMeasurementsRequestInterfaces>('/weather')
      return {
        weatherMeasurements: weatherMeasurements.map(weatherMeasurement => {
          return this.mapWeatherMeasurement(weatherMeasurement)
        }),
      }
    },

    async createWeatherMeasurement(
      cityName: string,
      providerType: WeatherProviderType,
    ): Promise<ICreateWeatherMeasurementRequestInterfaces['response']> {
      const apiRequestStore = useApiRequestStore()
      const {weatherMeasurement} = await apiRequestStore.post<ICreateWeatherMeasurementRequestInterfaces>('/weather', {
        data: {
          cityName,
          providerType,
        },
      })
      return {
        weatherMeasurement: this.mapWeatherMeasurement(weatherMeasurement),
      }
    },

    mapWeatherMeasurement(weatherMeasurement: IToJson<IWeatherMeasurementResponseEntity>): IWeatherMeasurementResponseEntity {
      return {
        ...weatherMeasurement,
        createdAt: new Date(weatherMeasurement.createdAt),
      }
    },
  },
})
