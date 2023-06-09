// Back end API RESTful

import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify()
const prisma = new PrismaClient()
app.register(cors)

app.get('/', async () => {
    const habits = await prisma.habit.deleteMany({
        where: {
            title:{
                startsWith: 'Beber'
            }
        }
    })
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP: On!')
})

