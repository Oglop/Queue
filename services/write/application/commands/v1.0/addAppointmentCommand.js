const { createAppoitment } = require('../../../infrastructure/inserts/createAppointment')

const execute = async (appointment, id) => {
    appointment.id = id
    await createAppoitment(appointment)
    return {
        id,
        message: 'record was created'
    }
}

module.exports = {
    execute
}