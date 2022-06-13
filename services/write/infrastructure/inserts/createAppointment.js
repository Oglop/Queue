const Appointment = require('../../../../persistance/models/appointment')
const createAppoitment = async record => {
    const result = await Appointment.create(record)
    return result
}

module.exports = {
    createAppoitment
}