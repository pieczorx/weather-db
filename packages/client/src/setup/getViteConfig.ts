import {resolve, join} from 'path'
import dotEnvExtended from 'dotenv-extended'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export function getViteConfig({mode}) {
  let configPath = resolve(__dirname, `../../../../config/env/client/.env.${mode}`)
  if(mode === 'localhost') {
    configPath = resolve(__dirname, '../../.env')
  }
  dotEnvExtended.load({
    path: configPath,
  })
  const srcPath = resolve(__dirname, '../../src')
  const packagesPath = resolve(srcPath, '../../')

  return defineConfig({
    plugins: [
      vue({
        reactivityTransform: true,
      }),
    ],
    root: srcPath,
    server: {
      port: Number(process.env.PORT),
      host: '0.0.0.0',
    },
    define: {
      ENV: JSON.stringify({
        ApiHost: process.env.API_HOST,
      }),
    },
    publicDir: resolve(srcPath, '../public'),
    resolve: {
      extensions: ['.vue', '.ts', '.js'],
      alias: {
        '@pieczorx-weather/server': join(packagesPath, 'server'),
        '@pieczorx-weather/client': join(packagesPath, 'client'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          dir: './.dist',
        },
      },
    },
  })
}
