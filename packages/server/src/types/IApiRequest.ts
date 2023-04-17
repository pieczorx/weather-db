import {Request} from 'express'
import {IBaseApiRequestInterfaces} from './IBaseApiRequestInterfaces'

export type IApiRequest<
  Interfaces extends IBaseApiRequestInterfaces = IBaseApiRequestInterfaces,
  LocalsType = Record<string, unknown>,
> = Request<
  Interfaces['params'],
  Interfaces['response'],
  Interfaces['body'],
  Interfaces['query'],
  LocalsType
>
