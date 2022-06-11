const express = require('express')
const app = express()
const getQueueByIdRoute = require('./routes/getQueueById')

app.use(express.json());

app.use('/queues', getQueueByIdRoute)

const sequelize = require('../infrastructure/persistance/database')
sequelize.sync().then(() => console.log('read-db ready'))

module.exports = app