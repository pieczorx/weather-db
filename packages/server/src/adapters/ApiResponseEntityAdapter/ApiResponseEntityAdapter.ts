import {injectable} from 'inversify'
import {IApiResponseEntityAdapter} from './types/IApiResponseEntityAdapter'
import {IWeatherMeasurementEntity} from '../../models/mongoose/WeatherMeasurementModel/types/IWeatherMeasurementEntity'
import {IWeatherMeasurementResponseEntity} from './types/responseEntities/IWeatherMeasurementResponseEntity'


@injectable()
export class ApiResponseEntityAdapter implements IApiResponseEntityAdapter {
  mapWeatherMeasurement(weatherMeasurement: IWeatherMeasurementEntity): IWeatherMeasurementResponseEntity {
    const {
      id,
      weatherData,
      providerType,
      createdAt,
      cityName,
    } = weatherMeasurement
    return {
      id,
      weatherData,
      providerType,
      createdAt,
      cityName,
    }
  }
}
