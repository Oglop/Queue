const {
    CREATE_APPOINTMENT
} = require('../../common/enums').COMMANDS
const addAppointmentCommandv1_0  = require('./v1.0/addAppointmentCommand')

const executeCommand = async event => {
    const { command, data, id } = event 
    switch (command) {
        case CREATE_APPOINTMENT: async () => await addAppointmentCommandv1_0.execute(data, id); break;
    }
}

module.exports = {
    executeCommand
}