import {inject, injectable} from 'inversify'
import {InterfaceType} from '../../enum/InterfaceType'
import {IOpenWeatherMapService} from './types/IOpenWeatherMapService'
import {IGetOpenWeatherMapWeatherResponse} from './types/IGetOpenWeatherMapWeatherResponse'
import axios from 'axios'

@injectable()
export class OpenWeatherMapService implements IOpenWeatherMapService {
  constructor(
    @inject(InterfaceType.constants.OpenWeatherMapAppId) private openWeatherMapAppId: string,
  ) {
  }

  public async getCurrentWeatherByCityName(cityName: string): Promise<IGetOpenWeatherMapWeatherResponse> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${this.openWeatherMapAppId}`
    const response = await axios.get(url)
    return response.data as IGetOpenWeatherMapWeatherResponse
  }
}
