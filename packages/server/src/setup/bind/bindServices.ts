import {InterfaceType} from '../../enum/InterfaceType'
import {Container} from 'inversify'
import {IWeatherProviderService} from '../../services/WeatherProviderService/types/IWeatherProviderService'
import {WeatherProviderService} from '../../services/WeatherProviderService/WeatherProviderService'
import {OpenWeatherMapService} from '../../services/OpenWeatherMapService/OpenWeatherMapService'
import {IOpenWeatherMapService} from '../../services/OpenWeatherMapService/types/IOpenWeatherMapService'
import {LoggerService} from '../../services/LoggerService/LoggerService'
import {ILoggerService} from '../../services/LoggerService/types/ILoggerService'

export function bindServices(container: Container): void {
  container.bind<IWeatherProviderService>(InterfaceType.services.WeatherProviderService).to(WeatherProviderService)
  container.bind<IOpenWeatherMapService>(InterfaceType.services.OpenWeatherMapService).to(OpenWeatherMapService)
  container.bind<ILoggerService>(InterfaceType.services.LoggerService).to(LoggerService)
}
