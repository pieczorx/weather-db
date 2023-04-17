import {IWeatherMeasurementEntity} from '../../../../models/mongoose/WeatherMeasurementModel/types/IWeatherMeasurementEntity'

export interface IWeatherMeasurementResponseEntity {
  id: IWeatherMeasurementEntity['id']
  providerType: IWeatherMeasurementEntity['providerType']
  cityName: IWeatherMeasurementEntity['cityName']
  weatherData: IWeatherMeasurementEntity['weatherData']
  createdAt: IWeatherMeasurementEntity['createdAt']
}
