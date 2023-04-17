import {IWeatherMeasurementEntity} from '../../../models/mongoose/WeatherMeasurementModel/types/IWeatherMeasurementEntity'

export interface IWeatherMeasurementRepository {
  findRecent(): Promise<IWeatherMeasurementEntity[]>
  create(weather: Partial<IWeatherMeasurementEntity>): Promise<IWeatherMeasurementEntity>
}
