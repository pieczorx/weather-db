import {AxiosError, AxiosRequestConfig} from 'axios'
import {ApiRequestQueueItemStatus} from '@pieczorx-weather/client/src/stores/ApiRequestStore/enum/ApiRequestQueueItemStatus'
import {ApiException} from '@pieczorx-weather/server/src/middleware/ApiResponseMiddleware/errors/ApiException'
import {IApiStoreRequestOptions} from '@pieczorx-weather/client/src/stores/ApiRequestStore/types/IApiStoreRequestOptions'

export interface IApiRequestQueueItem<T> {
  method: string
  path: string
  config?: AxiosRequestConfig
  status: ApiRequestQueueItemStatus
  options?: IApiStoreRequestOptions
  onResolve: (response: T) => void
  onReject: (error: unknown|AxiosError|ApiException) => void
  id: symbol
}
