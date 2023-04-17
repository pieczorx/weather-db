import {WeatherProviderType} from './enum/WeatherProviderType'
import {inject, injectable} from 'inversify'
import {InterfaceType} from '../../enum/InterfaceType'
import {IWeatherProviderStrategy} from './types/IWeatherProviderStrategy'
import {IWeatherProviderService} from './types/IWeatherProviderService'
import {IWeatherData} from '../../models/mongoose/WeatherMeasurementModel/types/IWeatherData'

@injectable()
export class WeatherProviderService implements IWeatherProviderService {
  constructor(
    @inject(InterfaceType.factories.WeatherProviderFactory) private weatherProviderFactory: <T>(weatherProviderType: WeatherProviderType) => IWeatherProviderStrategy<T>,
  ) {}

  async getCurrentWeatherByCityName(cityName: string, providerType: WeatherProviderType): Promise<IWeatherData> {
    const weatherProviderStrategy = this.weatherProviderFactory(providerType)
    return await weatherProviderStrategy.getCurrentWeatherByCityName(cityName)
  }
}
