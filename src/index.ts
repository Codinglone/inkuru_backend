import "reflect-metadata"
require('dotenv').config()
import { AppDataSource } from "./data-source"


const fastify = require('fastify')({logger: true})
const PORT = process.env.PORT || 5500;

fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/api-docs',
    swagger: {
        info: {
            title: 'Inkuru Blogging App Backend',
            description: 'Inkuru Blogging App Backend With Fastify and TypeORM',
            version: '1.0.0',
        }
    }
})

fastify.register(require('./routes/blogs.routes'),{prefix:'api/v1'})
    const start = async () => {
        try {
          await fastify.listen({ port: PORT })
          AppDataSource.initialize().then(async () => {
            console.log("Database connected")
        
        }).catch(error => console.log(error))
        } catch (err) {
          fastify.log.error(err)
          process.exit(1)
        }
      }
      start()

