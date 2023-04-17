import {InterfaceType} from '../../enum/InterfaceType'
import {Container, interfaces} from 'inversify'
import {IWeatherProviderStrategy} from '../../services/WeatherProviderService/types/IWeatherProviderStrategy'
import {WeatherProviderType} from '../../services/WeatherProviderService/enum/WeatherProviderType'

export function bindFactories(container: Container): void {
  container.bind<interfaces.Factory<IWeatherProviderStrategy>>(InterfaceType.factories.WeatherProviderFactory).toFactory<IWeatherProviderStrategy>((context: interfaces.Context) => {
    return (providerType: WeatherProviderType) => {
      if(context.container.isBoundNamed(InterfaceType.strategies.WeatherProviderStrategy, providerType)) {
        return context.container.getNamed<IWeatherProviderStrategy>(InterfaceType.strategies.WeatherProviderStrategy, providerType)
      }
      throw new Error(`WeatherProviderStrategy for ${providerType} does not exist`)
    }
  })
}
