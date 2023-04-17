import {InterfaceType} from '../../enum/InterfaceType'
import {Container} from 'inversify'
import {WeatherMeasurementRepository} from '../../repositories/WeatherMeasurementRepository/WeatherMeasurementRepository'
import {IWeatherMeasurementRepository} from '../../repositories/WeatherMeasurementRepository/types/IWeatherMeasurementRepository'

export function bindRepositories(container: Container): void {
  container.bind<IWeatherMeasurementRepository>(InterfaceType.repositories.WeatherMeasurementRepository).to(WeatherMeasurementRepository)
}

