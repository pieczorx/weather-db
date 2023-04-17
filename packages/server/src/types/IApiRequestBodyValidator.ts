import {IBaseApiRequestInterfaces} from './IBaseApiRequestInterfaces'

export type IApiRequestBodyValidator<Interfaces extends IBaseApiRequestInterfaces> = Interfaces['body']
