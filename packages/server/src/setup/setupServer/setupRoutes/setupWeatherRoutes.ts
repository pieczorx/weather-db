import {Container} from 'inversify'
import {Router} from 'express'
import {InterfaceType} from '../../../enum/InterfaceType'
import {IWeatherController} from '../../../controllers/WeatherController/types/IWeatherController'

export function setupWeatherRoutes(container: Container, router: Router): void {
  const weatherController = container.get<IWeatherController>(InterfaceType.controllers.WeatherController)
  router.post('/weather', [
    weatherController.createWeatherMeasurement.bind(weatherController),
  ])
  router.get('/weather', [
    weatherController.getWeatherMeasurements.bind(weatherController),
  ])
}
