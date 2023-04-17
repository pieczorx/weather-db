import {Container} from 'inversify'
import {Router} from 'express'
import {IApiResponseMiddleware} from '../../../middleware/ApiResponseMiddleware/types/IApiResponseMiddleware'
import {InterfaceType} from '../../../enum/InterfaceType'

export function setupPostRequestMiddleware(container: Container, router: Router): void {
  router.use((err, req, res) => container.get<IApiResponseMiddleware>(InterfaceType.middlewares.ApiResponseMiddleware).notFoundErrorFactory(err, req, res))
  router.use((err, req, res, next) => container.get<IApiResponseMiddleware>(InterfaceType.middlewares.ApiResponseMiddleware).unknownErrorHandler(err, req, res, next))
  router.use((err, req, res, next) => container.get<IApiResponseMiddleware>(InterfaceType.middlewares.ApiResponseMiddleware).knownErrorHandler(err, req, res, next))
}
