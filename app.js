const readApp = require('./services/read/web/server')
const writeApp = require('./services/write/web/server')
const connectApp = require('./services/connect/web/server')
const sequelize = require('./persistance/database')
const { migrate } = require('./persistance/migrate')
const { READ_PORT, WRITE_PORT, CONNECT_PORT } = require('./config')


sequelize.sync().then(async () => {//{ force: true }
    console.log('queue-db ready')
    await migrate()
    console.log('migration ready')
})

readApp.listen(READ_PORT, () => {
    console.log(`Read service listening on port ${READ_PORT}.`)
})

writeApp.listen(WRITE_PORT, () => {
    console.log(`Write service listening on port ${WRITE_PORT}.`)
})

connectApp.listen(CONNECT_PORT, () => {
    console.log(`Connect service listening on port ${CONNECT_PORT}.`)
})
