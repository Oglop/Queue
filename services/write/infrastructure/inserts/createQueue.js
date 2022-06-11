const sequalize = require('../persistance/database')
const Queue = require('../../application/models/queue')
const createQueue = async record => {
    const result = await Queue.create(record)
    return result
}

module.exports = {
    createQueue
}