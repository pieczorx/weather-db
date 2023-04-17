import {Container, interfaces} from 'inversify'
import {InterfaceType} from '../../../enum/InterfaceType'
import {Mongoose, Schema, Model} from 'mongoose'
import {IBaseEntity} from '../../../models/mongoose/types/IBaseEntity'

export function bindMongooseModel<DocumentType extends IBaseEntity>(container: Container, interfaceType: symbol, schema: Schema<DocumentType>, name: string): void {
  container.bind<Model<DocumentType>>(interfaceType).toDynamicValue((context: interfaces.Context) => {
    const mongooseConnection = context.container.get<Mongoose>(InterfaceType.singletons.MongoConnection)
    return mongooseConnection.model<DocumentType>(name, schema)
  })
}
