import {IBaseApiRequestInterfaces} from '../../../../../types/IBaseApiRequestInterfaces'
import {
  IWeatherMeasurementResponseEntity
} from '../../../../../adapters/ApiResponseEntityAdapter/types/responseEntities/IWeatherMeasurementResponseEntity'

export interface IGetWeatherMeasurementsRequestInterfaces extends IBaseApiRequestInterfaces {
  response: {
    weatherMeasurements: IWeatherMeasurementResponseEntity[]
  }
}
