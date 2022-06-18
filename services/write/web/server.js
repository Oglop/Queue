const express = require('express')
const roomRoutes1_0= require('./routes/v1_0/roomRoutes')
const queueRoutes1_0 = require('./routes/v1_0/queueRoutes')
const userRoutes1_0 = require('./routes/v1_0/userRoutes')
const appointmentRoutes1_0 = require('./routes/v1_0/appointmentRoutes')

const app = express()
app.use(express.json());

app.use('/v1.0/appointments', appointmentRoutes1_0)
app.use('/v1.0/rooms', roomRoutes1_0)
app.use('/v1.0/queues', queueRoutes1_0)
app.use('/v1.0/users', userRoutes1_0)

module.exports = app
