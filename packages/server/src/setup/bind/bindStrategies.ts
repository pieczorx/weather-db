import {InterfaceType} from '../../enum/InterfaceType'
import {Container} from 'inversify'
import {IWeatherProviderStrategy} from '../../services/WeatherProviderService/types/IWeatherProviderStrategy'
import {
  OpenWeatherMapWeatherProviderStrategy,
} from '../../services/WeatherProviderService/strategies/WeatherProviderStrategies/OpenWeatherMapWeatherProviderStrategy/OpenWeatherMapWeatherProviderStrategy'
import {WeatherProviderType} from '../../services/WeatherProviderService/enum/WeatherProviderType'

export function bindStrategies(container: Container): void {
  container.bind<IWeatherProviderStrategy>(InterfaceType.strategies.WeatherProviderStrategy).to(OpenWeatherMapWeatherProviderStrategy).whenTargetNamed(WeatherProviderType.OpenWeatherMap)

}
