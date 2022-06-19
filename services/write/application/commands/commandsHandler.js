const {
    CREATE_APPOINTMENT,
    CREATE_USER,
    CREATE_INVITATION
} = require('../../common/enums').COMMANDS
const addAppointmentCommandv1_0  = require('./v1.0/addAppointmentCommand')
const inviteUserCommandv1_0  = require('./v1.0/inviteUserCommand')
const addUserCommandv1_0  = require('./v1.0/addUserCommand')


const executeCommand = async event => {
    const { command, data, id } = event 
    switch (command) {
        case CREATE_APPOINTMENT: async () => await addAppointmentCommandv1_0.execute(data, id); break;
        case CREATE_USER: async () => await addUserCommandv1_0.execute(data, id); break;
        case CREATE_INVITATION: async () => await inviteUserCommandv1_0.execute(data, id); break;
    }
}

module.exports = {
    executeCommand
}