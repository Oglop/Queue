const express = require('express')
const sequelize = require('../infrastructure/persistance/database')
const { migrate } = require('../infrastructure/persistance/migrate')

const app = express()
const connectRoute = require('./routes/connect')
app.use(express.json());

app.use('/connect', connectRoute)

sequelize.sync().then(async () => {//{ force: true }
    console.log('queue-db ready')
    await migrate()
})

module.exports = app