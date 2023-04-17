import {Container} from 'inversify'
import {bindMongooseModel} from './helpers/bindMongooseModel'
import {MongooseTableName} from '../../enum/MongooseTableName'
import {InterfaceType} from '../../enum/InterfaceType'
import {IWeatherMeasurementEntity} from '../../models/mongoose/WeatherMeasurementModel/types/IWeatherMeasurementEntity'
import {WeatherMeasurementModel} from '../../models/mongoose/WeatherMeasurementModel/WeatherMeasurementModel'

export function bindMongooseModels(container: Container): void {
  bindMongooseModel<IWeatherMeasurementEntity>(
    container,
    InterfaceType.models.mongoose.WeatherMeasurementModel,
    WeatherMeasurementModel,
    MongooseTableName.WeatherMeasurement,
  )
}
