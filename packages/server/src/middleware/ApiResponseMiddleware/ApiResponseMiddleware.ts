import {ApiException} from './errors/ApiException'
import {KnownError} from './types/KnownError'
import {HTTPStatusCode} from './types/HttpStatusCode'
import {Request, Response} from 'express'
import {IApiResponseMiddleware} from './types/IApiResponseMiddleware'
import {inject, injectable} from 'inversify'
import {InterfaceType} from '../../enum/InterfaceType'
import {ILoggerService} from '../../services/LoggerService/types/ILoggerService'
import {ValidationError} from 'class-validator'
import {IApiResponse} from '../../types/IApiResponse'

@injectable()
export class ApiResponseMiddleware implements IApiResponseMiddleware {
  constructor(
    @inject(InterfaceType.services.LoggerService) private logger: ILoggerService,
  ) {}

  notFoundErrorFactory(req: Request, res: Response): void {
    if(!res.headersSent) {
      throw new ApiException(KnownError.NotFound, 'Endpoint not found', HTTPStatusCode.NotFound)
    }
    res.end()
  }

  unknownErrorHandler(err: ApiException): void {
    this.handleUnknownError(err)
  }

  knownErrorHandler(err: ApiException, req: Request, res: IApiResponse): Response {
    this.sendErrorResponse(res, err.httpCode, {
      message: err.message,
      name: err.name,
      extra: err.extra || undefined,
    })
    return res
  }

  sendStringResponse(res: Response, httpCode: HTTPStatusCode, payload: unknown): Response {
    res.status(httpCode).send(payload)
    return res
  }

  sendResponse(res: Response, httpCode: HTTPStatusCode, payload: unknown): Response {
    res.status(httpCode).json(payload)
    return res
  }

  sendErrorResponse(res: Response, httpCode: HTTPStatusCode, data: unknown): Response {
    this.sendResponse(res, httpCode, {
      success: false,
      error: data,
    })
    return res
  }

  sendSuccessResponse<ResponseType = unknown>(res: Response, data?: ResponseType, httpCode: HTTPStatusCode = HTTPStatusCode.OK): Response {
    this.sendResponse(res, httpCode, {
      success: true,
      data,
    })
    return res
  }

  private handleUnknownError(err: ApiException): void {
    const validationErrors = err as unknown as ValidationError[]
    if(Array.isArray(validationErrors)) {
      throw new ApiException(KnownError.InvalidRequest, err.message || 'Invalid request', HTTPStatusCode.BadRequest, true, {
        validationErrors: validationErrors.map(validationError => {
          return {
            field: validationError.property,
            constraints: validationError.constraints,
          }
        }),
      })
    }
    switch(err.constructor) {
    case ApiException:
      throw err
    default:
      this.logger.scopeLog('ApiResponseMiddleware/unknownErrorHandler', err)
      throw new ApiException(KnownError.InternalServerError, 'Internal server error', HTTPStatusCode.InternalServerError)
    }
  }
}
