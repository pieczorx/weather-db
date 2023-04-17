import {Express} from 'express'
import {setupContainer} from '../setup/setupContainer'
import {runPreSetupTasks} from '../setup/runPreSetupTasks'
import {setupRouter} from '../setup/setupServer/setupRouter'
import {InterfaceType} from '../enum/InterfaceType'

export async function setupServerApp(): Promise<{
  app: Express,
  port: number,
}> {
  await runPreSetupTasks()
  const container = await setupContainer()
  const app = await setupRouter(container) as Express
  const port = container.get<number>(InterfaceType.constants.Port)
  return {
    app,
    port,
  }
}
