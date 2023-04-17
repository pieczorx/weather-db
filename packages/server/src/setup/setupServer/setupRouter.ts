import express, {Router} from 'express'
import {Container} from 'inversify'
import {setupApiRouter} from './setupApiRouter'
import {InterfaceType} from '../../enum/InterfaceType'

export function setupRouter(container: Container): Router {
  const router = express()
  const apiRouter = setupApiRouter(container)
  const apiPath = container.get<string>(InterfaceType.constants.RootApiPath)
  router.use(apiPath, apiRouter)
  return router
}
