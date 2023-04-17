import {InterfaceType} from '../../enum/InterfaceType'
import {Container} from 'inversify'
import {IApiResponseMiddleware} from '../../middleware/ApiResponseMiddleware/types/IApiResponseMiddleware'
import {ApiResponseMiddleware} from '../../middleware/ApiResponseMiddleware/ApiResponseMiddleware'

export function bindMiddlewares(container: Container): void {
  container.bind<IApiResponseMiddleware>(InterfaceType.middlewares.ApiResponseMiddleware).to(ApiResponseMiddleware)
}
