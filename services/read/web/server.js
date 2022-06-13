const express = require('express')
const app = express()
const roomRoutes1_0 = require('./routes/v1_0/roomRoutes')

app.use(express.json());

app.use('/rooms', roomRoutes1_0)

module.exports = app