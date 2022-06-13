const express = require('express')

const app = express()
const connectRoute = require('./routes/connect')
app.use(express.json());

app.use('/connect', connectRoute)



module.exports = app