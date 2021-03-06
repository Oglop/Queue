const express = require('express')
const app = express()

const roomRoutes1_0 = require('./routes/v1_0/roomRoutes')
const userRoutes1_0 = require('./routes/v1_0/userRoutes')
const roleRoutes1_0 = require('./routes/v1_0/roleRoutes')

app.use(express.json());

app.use('/v1.0/users', userRoutes1_0)
app.use('/v1.0/roles', roleRoutes1_0)
app.use('/v1.0/rooms', roomRoutes1_0)

module.exports = app
