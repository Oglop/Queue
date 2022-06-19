const {
    CREATE_APPOINTMENT,
    CREATE_USER,
    CREATE_INVITATION
} = require('../../common/enums').COMMANDS
const addAppointmentCommandv1_0  = require('./v1_0/addAppointmentCommand')
const inviteUserCommandv1_0  = require('./v1_0/inviteUserCommand')
const addUserCommandv1_0  = require('./v1_0/addUserCommand')
const { debug, error } = require('../../../../logger')


const executeCommand = async event => {
    try {
        const { command, data, id } = event 
        debug(`execute command ${command}`, __filename, 'executeCommand', 'pre')
        let c = {}
        switch (command) {
            case CREATE_APPOINTMENT: async () => await addAppointmentCommandv1_0.execute(data, id); break;
            case CREATE_USER: c = addUserCommandv1_0; break;
            case CREATE_INVITATION: async () => await inviteUserCommandv1_0.execute(data, id); break;
        }
        await c.execute(data, id)
    } catch (e) {
        debug(`error ${e.message}`, __filename, 'executeCommand', 'error')
        console.log(e.message)
    }
}

module.exports = {
    executeCommand
}