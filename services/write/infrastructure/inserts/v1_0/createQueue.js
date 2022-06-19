const Queue = require('../../../../../persistance/models/queue')
const createQueue = async record => {
    const result = await Queue.create(record)
    return result
}

module.exports = {
    createQueue
}