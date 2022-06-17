const express = require('express')
const app = express()

const roomRoutes1_0 = require('./routes/v1_0/roomRoutes')
const userRoutes1_0 = require('./routes/v1_0/userRoutes')

app.use(express.json());

app.use('/rooms', roomRoutes1_0)
app.use('v1.0//users', userRoutes1_0)

module.exports = app