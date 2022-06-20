const { createQueue } = require('../../../infrastructure/inserts/v1_0/createQueue')

const execute = async (data, id) => {
    debug(`createQueueCommand id: ${id}.`, __filename, 'execute', 'create')
    try {
        data.id = id
        await createQueue(data)
    } catch (e) {
        error(`createQueueCommand error: ${e.message}.`, __filename, 'execute', 'create')
    }
}

module.exports = {
    execute
}