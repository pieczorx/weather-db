import {Schema} from 'mongoose'
import {IWeatherMeasurementEntity} from './types/IWeatherMeasurementEntity'
import {WeatherProviderType} from '../../../services/WeatherProviderService/enum/WeatherProviderType'

const WeatherMeasurementModel = new Schema<IWeatherMeasurementEntity>({
  cityName: {
    type: Schema.Types.String,
    required: true,
  },
  providerType: {
    type: Schema.Types.String,
    enum: Object.values(WeatherProviderType),
    required: true,
  },
  weatherData: {
    temperature: {
      type: Schema.Types.Number,
    },
    pressure: {
      type: Schema.Types.Number,
    },
    humidity: {
      type: Schema.Types.Number,
    },
    windSpeed: {
      type: Schema.Types.Number,
    },
  },
}, {
  timestamps: true,
})

export {WeatherMeasurementModel}
