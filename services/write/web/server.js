const express = require('express')
const addRoomRoute_1_0 = require('./routes/v1.0/addRoom')
const sequelize = require('../infrastructure/persistance/database')

const app = express()
app.use(express.json());

app.use('/1.0/rooms', addRoomRoute_1_0)

sequelize.sync().then(() => console.log('queue-db ready'))

module.exports = app