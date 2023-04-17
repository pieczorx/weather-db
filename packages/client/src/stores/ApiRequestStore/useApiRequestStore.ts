import {defineStore} from 'pinia'
import axios, {AxiosRequestConfig} from 'axios'
import {IBaseApiRequestInterfaces} from '@pieczorx-weather/server/src/types/IBaseApiRequestInterfaces'
import {IToJson} from '@pieczorx-weather/client/src/types/IToJson'

export const useApiRequestStore = defineStore('apiRequest', {
  actions: {
    async get<Interfaces extends IBaseApiRequestInterfaces>(path: string, config?: AxiosRequestConfig): Promise<IToJson<Interfaces['response']>> {
      return await this.request<Interfaces>('get', path, config)
    },
    async delete<Interfaces extends IBaseApiRequestInterfaces>(path: string, config?: AxiosRequestConfig): Promise<IToJson<Interfaces['response']>> {
      return await this.request<Interfaces>('delete', path, config)
    },
    async post<Interfaces extends IBaseApiRequestInterfaces>(path: string, config?: AxiosRequestConfig): Promise<IToJson<Interfaces['response']>> {
      return await this.request<Interfaces>('post', path, config)
    },
    async put<Interfaces extends IBaseApiRequestInterfaces>(path: string, config?: AxiosRequestConfig): Promise<IToJson<Interfaces['response']>> {
      return await this.request<Interfaces>('put', path, config)
    },
    async patch<Interfaces extends IBaseApiRequestInterfaces>(path: string, config?: AxiosRequestConfig): Promise<IToJson<Interfaces['response']>> {
      return await this.request<Interfaces>('patch', path, config)
    },

    async request<Interfaces extends IBaseApiRequestInterfaces>(
      method = 'get',
      path: string,
      config?: AxiosRequestConfig,
    ): Promise<IToJson<Interfaces['response']>> {
      return await this.makeRequest(method, path, config)
    },

    async makeRequest<Interfaces extends IBaseApiRequestInterfaces>(
      method = 'get',
      path: string,
      config?: AxiosRequestConfig,
    ): Promise<IToJson<Interfaces['response']>> {
      if(!config) {
        config = {
        }
      }
      const axiosRequestConfig = {
        method,
        url: `${ENV.ApiHost}${path}`,
        ...(config ? config : {
        }),
        headers: config.headers,
      }
      const axiosResponse = await axios(axiosRequestConfig)
      const res = axiosResponse.data
      return res.data
    },
  },
})
