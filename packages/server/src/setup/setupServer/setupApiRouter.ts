import {Router} from 'express'
import ExpressPromiseRouter from 'express-promise-router'
import {Container} from 'inversify'
import {setupPreRequestMiddleware} from './setupMiddleware/setupPreRequestMiddleware'
import {setupPostRequestMiddleware} from './setupMiddleware/setupPostRequestMiddleware'
import {setupWeatherRoutes} from './setupRoutes/setupWeatherRoutes'

export function setupApiRouter(container: Container): Router {
  const router = ExpressPromiseRouter()

  setupPreRequestMiddleware(container, router)

  setupWeatherRoutes(container, router)

  setupPostRequestMiddleware(container, router)
  return router
}
