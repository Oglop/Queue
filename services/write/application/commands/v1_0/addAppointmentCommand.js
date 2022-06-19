const { createAppoitment } = require('../../../infrastructure/inserts/v1_0/createAppointment')
const { debug, error } = require('../../../../../logger')
const execute = async (appointment, id) => {
    debug(`create appointment id: ${id}.`, __filename, 'execute', 'pre create')
    try {
        appointment.id = id
        const result = await createAppoitment(appointment)
        debug(`create appointment id: ${id}.`, __filename, 'execute', 'post created')
    } catch (e) {
        error(`add appointment error: ${e.message}.`, __filename, 'execute', 'create appointment')
    }
}

module.exports = {
    execute
}