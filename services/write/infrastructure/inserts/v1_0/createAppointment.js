const Appointment = require('../../../../../persistance/models/appointment')
const { debug } = require('../../../../../logger')
const createAppoitment = async record => {
    debug(`createAppoitment id: ${record.id}.`, __filename, 'execute', 'create')
    const result = await Appointment.create(record)
    return result
}

module.exports = {
    createAppoitment
}