import {KnownError} from '../types/KnownError'
import {HTTPStatusCode} from '../types/HttpStatusCode'

export class ApiException extends Error {
  public readonly name: KnownError
  public readonly httpCode: HTTPStatusCode
  public readonly isOperational: boolean
  public readonly extra: unknown

  constructor(name: KnownError, message: string, httpCode: HTTPStatusCode, isOperational = true, extra = undefined) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)

    this.name = name
    this.httpCode = httpCode
    this.isOperational = isOperational
    this.extra = extra

    Error.captureStackTrace(this)
  }
}
