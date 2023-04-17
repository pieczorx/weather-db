import {InterfaceType} from '../../enum/InterfaceType'
import {Container} from 'inversify'
import {IApiResponseEntityAdapter} from '../../adapters/ApiResponseEntityAdapter/types/IApiResponseEntityAdapter'
import {ApiResponseEntityAdapter} from '../../adapters/ApiResponseEntityAdapter/ApiResponseEntityAdapter'

export function bindAdapters(container: Container): void {
  container.bind<IApiResponseEntityAdapter>(InterfaceType.adapters.ApiResponseEntityAdapter).to(ApiResponseEntityAdapter)
}
