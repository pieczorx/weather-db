import {IApiRequestQueueItem} from '@pieczorx-weather/client/src/stores/ApiRequestStore/types/IApiRequestQueueItem'

export interface IApiRequestStoreState {
  requestQueueItems: IApiRequestQueueItem<unknown>[]
}
