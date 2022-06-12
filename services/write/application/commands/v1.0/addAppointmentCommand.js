const { createAppoitment } = require('../../../infrastructure/inserts/createAppointment')
const { generateId } = require('../../../../../lib')

const execute = async (appointment) => {
    appointment.id = generateId()
    const id = await createAppoitment(appointment)
    return {
        id,
        message: 'record was created'
    }
}

module.exports = {
    execute
}