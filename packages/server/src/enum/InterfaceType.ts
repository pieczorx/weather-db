export const InterfaceType = {
  adapters: {
    ApiResponseEntityAdapter: Symbol.for('EntityApiResponseAdapter'),
  },
  services: {
    WeatherProviderService: Symbol.for('WeatherProviderService'),
    LoggerService: Symbol.for('LoggerService'),
    OpenWeatherMapService: Symbol.for('OpenWeatherMapService'),
  },
  middlewares: {
    ApiResponseMiddleware: Symbol.for('ApiResponseMiddleware'),
  },
  controllers: {
    WeatherController: Symbol.for('WeatherController'),
  },
  repositories: {
    WeatherMeasurementRepository: Symbol.for('WeatherRepository'),
  },
  singletons: {
    MongoConnection: Symbol.for('MongoConnection'),
  },
  constants: {
    Port: Symbol.for('Port'),
    RootApiPath: Symbol.for('ApiPath'),
    MongoConnectionUrl: Symbol.for('MongoConnectionUrl'),
    OpenWeatherMapAppId: Symbol.for('OpenWeatherMapAppId'),
  },
  strategies: {
    WeatherProviderStrategy: Symbol.for('WeatherProviderStrategy'),
  },
  factories: {
    WeatherProviderFactory: Symbol.for('WeatherProviderFactory'),
  },
  models: {
    mongoose: {
      WeatherMeasurementModel: Symbol.for('WeatherModel'),
    },
  },
}
