import {IApiRequest} from '../../../types/IApiRequest.js'
import {Response} from 'express'
import {
  ICreateWeatherMeasurementRequestInterfaces,
} from '../validators/CreateWeatherMeasurement/types/ICreateWeatherMeasurementRequestInterfaces'
import {
  IGetWeatherMeasurementsRequestInterfaces,
} from '../validators/GetWeatherMeasurements/types/IGetWeatherMeasurementsRequestInterfaces'

export interface IWeatherController {
  createWeatherMeasurement(req: IApiRequest<ICreateWeatherMeasurementRequestInterfaces>, res: Response): Promise<Response>
  getWeatherMeasurements(req: IApiRequest<IGetWeatherMeasurementsRequestInterfaces>, res: Response): Promise<Response>
}
