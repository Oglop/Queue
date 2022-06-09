const express = require('express')
const app = express()
const getQueueByIdRoute = require('./routes/getQueueById')

app.use(express.json());

app.use('/queues', getQueueByIdRoute)

app.get('/', async (req, res) => {
  res.send('Hello World')
})

module.exports = app