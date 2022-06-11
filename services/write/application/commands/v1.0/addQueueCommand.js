const { createQueue } = require('../../../infrastructure/inserts/createQueue')
const { generateId } = require('../../../../../lib')

const execute = async (queue) => {
    queue.id = generateId()
    await createQueue(queue)
    return queue.id
}

module.exports = {
    execute
}