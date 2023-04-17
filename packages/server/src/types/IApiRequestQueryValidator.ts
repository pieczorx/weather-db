import {IBaseApiRequestInterfaces} from './IBaseApiRequestInterfaces'

export type IApiRequestQueryValidator<Interfaces extends IBaseApiRequestInterfaces> = Interfaces['query']
