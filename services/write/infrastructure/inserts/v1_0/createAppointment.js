const Appointment = require('../../../../../persistance/models/appointment')
const { debug } = require('../../../../../logger')
const createAppointment = async record => {
    debug(`createAppoitment id: ${record.id}.`, __filename, 'execute', 'create')
    const result = await Appointment.create(record)
    return result
}

module.exports = {
    createAppointment
}