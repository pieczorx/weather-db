import {validate} from 'class-validator'
import {classToPlain, plainToClass} from 'class-transformer'

function validationFactory<T>(metadataKey: symbol, model: { new (...args: unknown[]): T}, source: 'body' | 'query' | 'params') {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (target: unknown, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    Reflect.defineMetadata(metadataKey, model, target, propertyName)

    const method = descriptor.value
    descriptor.value = async function (...args) {
      const model = Reflect.getOwnMetadata(metadataKey, target, propertyName)

      const req = args[0]
      const next = args[2]
      const plain = req[source]
      const transformedClass = plainToClass(model,  plain)
      req[source] = classToPlain(transformedClass)
      const errors = await validate(transformedClass)
      if (errors.length > 0) {
        return next(errors)
      }
      return method.apply(this, args)
    }
  }
}

export const ValidateQuery = dto => validationFactory(Symbol('validate-query'), dto, 'query')
export const ValidateBody = dto  => validationFactory(Symbol('validate-body'), dto, 'body')
export const ValidateParams = dto  => validationFactory(Symbol('validate-params'), dto, 'params')
