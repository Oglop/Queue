const express = require('express')

const app = express()
const connectRoute = require('./routes/connect')
const refreshRoute = require('./routes/refresh')
app.use(express.json());

app.use('/connect', connectRoute)
app.use('/refresh', refreshRoute)



module.exports = app