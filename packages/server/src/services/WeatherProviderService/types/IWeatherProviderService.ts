import {WeatherProviderType} from '../enum/WeatherProviderType'
import {IWeatherData} from '../../../models/mongoose/WeatherMeasurementModel/types/IWeatherData'

export interface IWeatherProviderService {
  getCurrentWeatherByCityName(cityName: string, providerType: WeatherProviderType): Promise<IWeatherData>
}
