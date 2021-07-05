const {prismaClient, PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

prisma.$connect()
.then(module.exports = prisma)
.catch(err=>console.log(err))


