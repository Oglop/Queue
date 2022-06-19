const { generateId } = require('../lib')

const trace = (message, file, func, step = '/', logId = generateId()) => {
    console.log(`trace:: transactionId: ${logId}, ${message}, file: ${file}, function: ${func}, step: ${step}`)
}

const debug = (message, file, func, step = '/', logId = generateId()) => {
    console.log(`debug:: transactionId: ${logId}, ${message}, file: ${file}, function: ${func}, step: ${step}`)
}

const info = (message, file, func, step = '/', logId = generateId()) => {
    console.log(`info:: transactionId: ${logId}, ${message}, file: ${file}, function: ${func}, step: ${step}`)
}

const error = (message, file, func, step = '/', logId = generateId()) => {
    console.log(`error:: transactionId: ${logId}, ${message}, file: ${file}, function: ${func}, step: ${step}`)
}

const critical = (message, file, func, step = '/', logId = generateId()) => {
    console.log(`critical:: transactionId: ${logId}, ${message}, file: ${file}, function: ${func}, step: ${step}`)
}

module.exports = {
    trace,
    debug,
    info,
    error,
    critical
}