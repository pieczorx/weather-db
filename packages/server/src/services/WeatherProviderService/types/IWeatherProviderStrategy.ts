import {IWeatherData} from '../../../models/mongoose/WeatherMeasurementModel/types/IWeatherData'

export interface IWeatherProviderStrategy {
  getCurrentWeatherByCityName(cityName: string): Promise<IWeatherData>
}
