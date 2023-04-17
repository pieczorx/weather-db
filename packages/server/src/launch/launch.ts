import 'reflect-metadata'
import {Server} from './Server'

const server = new Server()
server.log('Starting...')
server.start().catch((err) => {
  server.log('Error in server start script:', err)
})
