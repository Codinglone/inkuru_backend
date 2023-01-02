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

AppDataSource.initialize().then(async () => {

   

}).catch(error => console.log(error))
