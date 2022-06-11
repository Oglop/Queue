const express = require('express')
const roomRoutes1_0= require('./routes/v1_0/roomRoutes')
const sequelize = require('../infrastructure/persistance/database')

const app = express()
app.use(express.json());

app.use('/1.0/rooms', roomRoutes1_0)

sequelize.sync().then(() => console.log('queue-db ready'))

module.exports = app