import {IBaseEntity} from '../../types/IBaseEntity'
import {WeatherProviderType} from '../../../../services/WeatherProviderService/enum/WeatherProviderType'
import {IWeatherData} from './IWeatherData'

export interface IWeatherMeasurementEntity extends IBaseEntity {
  providerType: WeatherProviderType
  cityName: string
  weatherData: IWeatherData
}
