const readApp = require('./services/read/web/server')
const writeApp = require('./services/write/web/server')
const { READ_PORT, WRITE_PORT } = require('./config')

readApp.listen(READ_PORT, () => {
    console.log(`Read service listening on port ${READ_PORT}.`)
})

/*
writeApp.listen(WRITE_PORT, () => {
    console.log(`Write service listening on port ${WRITE_PORT}.`)
})*/
