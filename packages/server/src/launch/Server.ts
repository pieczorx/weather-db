import {RequestListener, Server as HttpServer, createServer} from 'http'
import {setupServerApp} from './setupServerApp'
import {performance} from 'node:perf_hooks'
import * as chalk from 'chalk'

export class Server {
  private app: RequestListener = null
  private httpServer: HttpServer = null
  private port = 3000

  public async start() {
    const t1 = performance.now()
    this.setupHotReload()
    this.setupGracefulShutdown()
    this.log('Hot reload activated')
    try {
      await this.setupHttpServer()
      this.log('HTTP Server setup complete')
      const {port, app} = await setupServerApp()
      this.replaceApp(app)
      this.port = port
      const t2 = performance.now()
      this.log('App loaded in', Math.ceil(t2 - t1), 'ms')
    } finally {
      await this.listen(this.port)
      this.log(`HTTP server listening on port ${this.port}. You can now open up http://localhost:${this.port}/`)
    }
  }

  private async setupHttpServer(): Promise<void> {
    this.httpServer = createServer()
  }

  private async listen(port: number) {
    await new Promise((resolve, reject) => {
      this.httpServer.listen(port, () => {
        resolve(null)
      })
      this.httpServer.on('error', (err: NodeJS.ErrnoException) => {
        if (err.code === 'EADDRINUSE') {
          reject(err)
        }
      })
    })
  }


  private setupGracefulShutdown() {
    process.on('SIGINT', this.gracefulShutdownHandler.bind(this))
    process.on('SIGTERM', this.gracefulShutdownHandler.bind(this))
  }

  private gracefulShutdownHandler() {
    this.log('Shutting down gracefully...')
    if(this.httpServer) {
      this.httpServer.close(() => {
        this.log('All requests have been completed, shutting down')
        process.exit()
      })
    } else {
      this.log('No pending requests, shutting down')
      process.exit()
    }
  }

  private replaceApp(newApp) {
    this.httpServer.removeAllListeners('upgrade')
    this.httpServer.removeAllListeners('request')
    this.app = newApp
    this.httpServer.on('request', this.app)
  }

  private setupHotReload() {
    if(!module.hot) {
      return
    }
    module.hot.accept('./setupServerApp', async () => {
      try {
        this.httpServer.removeAllListeners('request')
        const {app, port} = await setupServerApp()
        if(port !== this.port) {
          this.log('Port change in runtime is not implemented yet')
        }
        this.replaceApp(app)
        this.log('App has been replaced by a new one')
        this.log('Hot reload complete')
      } catch(error) {
        this.log('Failed to restart app', error)
      }
    })
    module.hot.accept((err) => console.error(err))
    module.hot.dispose(() => {
      this.log('Disposing entry module...')
      if(this.httpServer) {
        this.httpServer.close()
      }
    })
  }

  public log(...args: unknown[]): void {
    console.log(chalk.blue('[Server]'), ...args)
  }
}
