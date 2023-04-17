import {IWeatherProviderStrategy} from '../../../types/IWeatherProviderStrategy'
import {inject, injectable} from 'inversify'
import {IVerifyUserMailTemplateStrategyPayload} from './types/IVerifyUserMailTemplateStrategyPayload'
import {InterfaceType} from '../../../../../enum/InterfaceType'
import {IWeatherData} from '../../../../../models/mongoose/WeatherMeasurementModel/types/IWeatherData'
import {IOpenWeatherMapService} from '../../../../OpenWeatherMapService/types/IOpenWeatherMapService'

@injectable()
export class OpenWeatherMapWeatherProviderStrategy implements IWeatherProviderStrategy<IVerifyUserMailTemplateStrategyPayload> {
  constructor(
    @inject(InterfaceType.services.OpenWeatherMapService) private openWeatherMapService: IOpenWeatherMapService,
  ) {}

  public async getCurrentWeatherByCityName(cityName: string): Promise<IWeatherData> {
    const openWeatherMapWeatherResponse = await this.openWeatherMapService.getCurrentWeatherByCityName(cityName)
    return {
      humidity: openWeatherMapWeatherResponse.main.humidity,
      pressure: openWeatherMapWeatherResponse.main.pressure,
      temperature: openWeatherMapWeatherResponse.main.temp,
      windSpeed: openWeatherMapWeatherResponse.wind.speed,
    }
  }
}

