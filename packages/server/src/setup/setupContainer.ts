import {Container} from 'inversify'
import 'reflect-metadata'
import {bindServices} from './bind/bindServices'
import {bindControllers} from './bind/bindControllers'
import {bindRepositories} from './bind/bindRepositories'
import {bindMongooseDatabase} from './bindDatabase/bindMongooseDatabase'
import {InterfaceType} from '../enum/InterfaceType'
import {bindMongooseModels} from './bind/bindMongooseModels'
import {bindFactories} from './bind/bindFactories'
import {bindConstants} from './bind/bindConstants'
import {bindAdapters} from './bind/bindAdapters'
import {bindStrategies} from './bind/bindStrategies'
import {bindMiddlewares} from './bind/bindMiddlewares'

export async function setupContainer(): Promise<Container> {
  const container: Container = new Container()
  console.info('[setup/setupContainer]', 'Call bind function', 'bindConstants')
  await bindConstants(container)
  console.info('[setup/setupContainer]', 'Connect to MongoDB...')
  await bindMongooseDatabase(container, 'MongoConnection', InterfaceType.singletons.MongoConnection, container.get<string>(InterfaceType.constants.MongoConnectionUrl))

  const bindFunctions = [
    bindServices,
    bindAdapters,
    bindControllers,
    bindRepositories,
    bindMongooseModels,
    bindFactories,
    bindStrategies,
    bindMiddlewares,
  ]
  for(const bindFunction of bindFunctions) {
    console.info('[setup/setupContainer]', 'Call bind function', `'${bindFunction.name}'`)
    await bindFunction(container)
  }
  return container
}
