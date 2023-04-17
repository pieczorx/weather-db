import {IBaseApiRequestInterfaces} from './IBaseApiRequestInterfaces'

export type IApiRequestParamValidator<Interfaces extends IBaseApiRequestInterfaces> = Interfaces['params']
