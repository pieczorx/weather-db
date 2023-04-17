import {InterfaceType} from '../../enum/InterfaceType'
import {Container} from 'inversify'

import {IWeatherController} from '../../controllers/WeatherController/types/IWeatherController'
import {WeatherController} from '../../controllers/WeatherController/WeatherController'

export function bindControllers(container: Container): void {
  container.bind<IWeatherController>(InterfaceType.controllers.WeatherController).to(WeatherController)
}
