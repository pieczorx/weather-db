import {IWeatherMeasurementRepository} from './types/IWeatherMeasurementRepository'
import {inject, injectable} from 'inversify'
import {InterfaceType} from '../../enum/InterfaceType'
import {IWeatherMeasurementEntity} from '../../models/mongoose/WeatherMeasurementModel/types/IWeatherMeasurementEntity'
import {IBaseModel} from '../../models/mongoose/types/IBaseModel'

@injectable()
export class WeatherMeasurementRepository implements IWeatherMeasurementRepository {
  constructor(
    @inject(InterfaceType.models.mongoose.WeatherMeasurementModel) protected WeatherMeasurementModel: IBaseModel<IWeatherMeasurementEntity>,
  ) {}

  public async findRecent(): Promise<IWeatherMeasurementEntity[]> {
    return this.WeatherMeasurementModel.find().sort([['createdAt', -1]])
  }

  public async create(weatherMeasurement: Partial<IWeatherMeasurementEntity>): Promise<IWeatherMeasurementEntity> {
    return await this.WeatherMeasurementModel.create(weatherMeasurement)
  }
}
