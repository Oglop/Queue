const { createQueue } = require('../../../infrastructure/inserts//v1_0/createQueue')
const { generateId } = require('../../../../../lib')

const execute = async (queue) => {
    queue.id = generateId()
    const id = await createQueue(queue)
    return {
        id,
        message: 'record was created'
    }
}

module.exports = {
    execute
}