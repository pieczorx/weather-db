import {Response} from 'express'

export interface IApiResponse extends Response {
  sentry: string
}
