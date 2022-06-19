const User = require('../../../../../persistance/models/user')
const { debug, error } = require('../../../../../logger')

const execute = async (data, id) => {
    debug(`User.create id: ${id}.`, __filename, 'execute', 'create')
    data.id = id
    try {
       // await User.create(data)
    } catch (e) {
        error(`User.create error: ${e.message}.`, __filename, 'execute', 'create')
    }
}

module.exports = {
    execute
}