import {NextFunction, Request, Response} from 'express'
import {ApiException} from '../errors/ApiException'
import {HTTPStatusCode} from './HttpStatusCode'

export interface IApiResponseMiddleware {
  notFoundErrorFactory(req: Request, res: Response, next: NextFunction): void;
  unknownErrorHandler(err, req: Request, res: Response, next: NextFunction): void;
  knownErrorHandler(err: ApiException, req: Request, res: Response, next: NextFunction): Response;
  sendStringResponse(res: Response, httpCode: HTTPStatusCode, payload: unknown): Response;
  sendResponse(res: Response, httpCode: HTTPStatusCode, payload: unknown): Response;
  sendErrorResponse(res: Response, httpCode: HTTPStatusCode, data: unknown): Response;
  sendSuccessResponse<ResponseType = unknown>(res: Response, data?: ResponseType, httpCode?: HTTPStatusCode): Response;
}
