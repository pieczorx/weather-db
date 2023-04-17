import {IWeatherMeasurementResponseEntity} from './responseEntities/IWeatherMeasurementResponseEntity'
import {IWeatherMeasurementEntity} from '../../../models/mongoose/WeatherMeasurementModel/types/IWeatherMeasurementEntity'

export interface IApiResponseEntityAdapter {
  mapWeatherMeasurement(weatherMeasurement: IWeatherMeasurementEntity): IWeatherMeasurementResponseEntity
}
