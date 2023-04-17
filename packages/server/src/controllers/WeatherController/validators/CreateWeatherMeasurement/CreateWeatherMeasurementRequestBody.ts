import {IsString, IsNotEmpty, IsEnum} from 'class-validator'
import {WeatherProviderType} from '../../../../services/WeatherProviderService/enum/WeatherProviderType'
import {IApiRequestBodyValidator} from '../../../../types/IApiRequestBodyValidator'
import {ICreateWeatherMeasurementRequestInterfaces} from './types/ICreateWeatherMeasurementRequestInterfaces'

export class CreateWeatherMeasurementRequestBody implements IApiRequestBodyValidator<ICreateWeatherMeasurementRequestInterfaces> {
  @IsString()
    cityName: string

  @IsNotEmpty()
  @IsEnum(WeatherProviderType)
    providerType: WeatherProviderType
}
