import {Container} from 'inversify'
import express, {Router} from 'express'
import cors from 'cors'
import helmet from 'helmet'

export function setupPreRequestMiddleware(container: Container, router: Router): void {
  if(process.env.ENV !== 'production') {
    router.use(cors())
  }
  router.use(express.json())
  router.use(express.urlencoded({
    extended: true,
  }))
  router.use(helmet())
}
