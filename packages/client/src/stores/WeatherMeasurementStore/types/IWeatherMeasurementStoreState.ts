import {
  IWeatherMeasurementResponseEntity,
} from '@pieczorx-weather/server/src/adapters/ApiResponseEntityAdapter/types/responseEntities/IWeatherMeasurementResponseEntity'

export interface IWeatherMeasurementStoreState {
  weatherMeasurements: IWeatherMeasurementResponseEntity[]
  isFetchingWeatherMeasurements: boolean
}
