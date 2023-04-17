import {InterfaceType} from '../../enum/InterfaceType'
import {Container} from 'inversify'

export function bindConstants(container: Container): void {
  container.bind<string>(InterfaceType.constants.Port).toConstantValue(process.env.PORT)
  container.bind<string>(InterfaceType.constants.RootApiPath).toConstantValue(process.env.ROOT_API_PATH)
  container.bind<string>(InterfaceType.constants.MongoConnectionUrl).toConstantValue(process.env.MONGO_CONNECTION_URL)
  container.bind<string>(InterfaceType.constants.OpenWeatherMapAppId).toConstantValue(process.env.OPEN_WEATHER_MAP_APP_ID)
}
