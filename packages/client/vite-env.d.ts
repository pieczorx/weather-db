/// <reference types="vite/client" />
import 'vue-router'

declare module '*.vue' {
  import type {DefineComponent} from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>

  export default component
}

declare const ENV: {
  ApiHost: string
}


declare global {
  const ENV: ENV
}

declare module 'vue-router' {
  interface RouteMeta {
    depth?: number,
  }
}
