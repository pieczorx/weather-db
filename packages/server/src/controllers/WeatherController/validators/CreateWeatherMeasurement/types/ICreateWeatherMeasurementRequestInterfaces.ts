import {IBaseApiRequestInterfaces} from '../../../../../types/IBaseApiRequestInterfaces'
import {WeatherProviderType} from '../../../../../services/WeatherProviderService/enum/WeatherProviderType'
import {
  IWeatherMeasurementResponseEntity
} from '../../../../../adapters/ApiResponseEntityAdapter/types/responseEntities/IWeatherMeasurementResponseEntity'

export interface ICreateWeatherMeasurementRequestInterfaces extends IBaseApiRequestInterfaces {
  body: {
    cityName: string
    providerType: WeatherProviderType
  }

  response: {
    weatherMeasurement: IWeatherMeasurementResponseEntity
  }
}
