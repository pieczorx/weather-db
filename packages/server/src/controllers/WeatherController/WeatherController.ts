import {Response} from 'express'
import {inject, injectable} from 'inversify'
import {InterfaceType} from '../../enum/InterfaceType'
import {IApiResponseMiddleware} from '../../middleware/ApiResponseMiddleware/types/IApiResponseMiddleware'
import {IWeatherController} from './types/IWeatherController'
import {IApiRequest} from '../../types/IApiRequest'
import {ValidateBody} from '../../helpers/controllerValidationFactory'
import {CreateWeatherMeasurementRequestBody} from './validators/CreateWeatherMeasurement/CreateWeatherMeasurementRequestBody'
import {ICreateWeatherMeasurementRequestInterfaces} from './validators/CreateWeatherMeasurement/types/ICreateWeatherMeasurementRequestInterfaces'
import {IGetWeatherMeasurementsRequestInterfaces} from './validators/GetWeatherMeasurements/types/IGetWeatherMeasurementsRequestInterfaces.js'
import {IWeatherMeasurementRepository} from '../../repositories/WeatherMeasurementRepository/types/IWeatherMeasurementRepository'
import {IApiResponseEntityAdapter} from '../../adapters/ApiResponseEntityAdapter/types/IApiResponseEntityAdapter'
import {IWeatherProviderService} from '../../services/WeatherProviderService/types/IWeatherProviderService'

@injectable()
export class WeatherController implements IWeatherController {
  constructor(
    @inject(InterfaceType.middlewares.ApiResponseMiddleware) protected apiResponseMiddleware: IApiResponseMiddleware,
    @inject(InterfaceType.repositories.WeatherMeasurementRepository) protected weatherMeasurementRepository: IWeatherMeasurementRepository,
    @inject(InterfaceType.adapters.ApiResponseEntityAdapter) protected apiResponseEntityAdapter: IApiResponseEntityAdapter,
    @inject(InterfaceType.services.WeatherProviderService) protected weatherProviderService: IWeatherProviderService,
  ) {}

  @ValidateBody(CreateWeatherMeasurementRequestBody)
  public async createWeatherMeasurement(req: IApiRequest<ICreateWeatherMeasurementRequestInterfaces>, res: Response): Promise<Response> {
    const {cityName, providerType} = req.body
    const weatherData = await this.weatherProviderService.getCurrentWeatherByCityName(cityName, providerType)
    const weatherMeasurement = await this.weatherMeasurementRepository.create({
      cityName,
      providerType,
      weatherData,
    })
    return this.apiResponseMiddleware.sendSuccessResponse<ICreateWeatherMeasurementRequestInterfaces['response']>(res, {
      weatherMeasurement: this.apiResponseEntityAdapter.mapWeatherMeasurement(weatherMeasurement),
    })
  }

  public async getWeatherMeasurements(req: IApiRequest<IGetWeatherMeasurementsRequestInterfaces>, res: Response): Promise<Response> {
    const weatherMeasurements = await this.weatherMeasurementRepository.findRecent()
    return this.apiResponseMiddleware.sendSuccessResponse<IGetWeatherMeasurementsRequestInterfaces['response']>(res, {
      weatherMeasurements: weatherMeasurements.map(weatherMeasurement => {
        return this.apiResponseEntityAdapter.mapWeatherMeasurement(weatherMeasurement)
      }),
    })
  }
}
