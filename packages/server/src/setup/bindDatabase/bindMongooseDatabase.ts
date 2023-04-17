import {Container} from 'inversify'
import {createConnection, Connection} from 'mongoose'

export async function bindMongooseDatabase(container: Container, name: string, interfaceType: symbol, connectionUri: string): Promise<void> {
  const connection = await connectToMongooseDatabase(connectionUri)
  connection.set('debug', (collectionName, method, query, doc) => {
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc)
  })
  connection.on('connected', () => {
    console.log('[MongoDB] Successfully connected')
  })
  connection.on('disconnected', (error) => {
    console.error('[MongoDB] Disconnected, reason:', error)
  })
  connection.on('reconnected', () => {
    console.log('[MongoDB] Successfully re-connected')
  })
  container.bind<Connection>(interfaceType).toConstantValue(connection)
}

async function connectToMongooseDatabase(connectionUri): Promise<Connection> {
  return await createConnection(connectionUri, {
    keepAlive: true,
    keepAliveInitialDelay: 30 * 1000,
  }).asPromise()
}
