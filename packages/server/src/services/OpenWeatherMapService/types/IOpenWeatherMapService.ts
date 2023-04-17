import {IGetOpenWeatherMapWeatherResponse} from './IGetOpenWeatherMapWeatherResponse'

export interface IOpenWeatherMapService {
  getCurrentWeatherByCityName(cityName: string): Promise<IGetOpenWeatherMapWeatherResponse>
}
