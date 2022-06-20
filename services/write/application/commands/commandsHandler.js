const {
    CREATE_APPOINTMENT_v1_0,
    CREATE_USER_v1_0,
    CREATE_INVITATION_v1_0,
    CREATE_ROOM_v1_0,
    CREATE_QUEUE_v1_0
} = require('../../common/enums').COMMANDS
const createAppointmentCommandv1_0  = require('./v1_0/addAppointmentCommand')
const inviteUserCommandv1_0  = require('./v1_0/createInvitationCommand')
const createUserCommandv1_0  = require('./v1_0/addUserCommand')
const createRoomCommand1_0 = require('./v1_0/createRoomCommand')
const createQueueCommand1_0 = require('./v1_0/createQueueCommand')
const { debug, error } = require('../../../../logger')


const executeCommand = async event => {
    try {
        const { command, data, id } = event 
        debug(`execute command ${command}`, __filename, 'executeCommand', 'pre')
        let context;
        switch (command) {
            case CREATE_APPOINTMENT_v1_0: context = createAppointmentCommandv1_0; break;
            case CREATE_USER_v1_0: context = createUserCommandv1_0; break;
            case CREATE_INVITATION_v1_0: context = inviteUserCommandv1_0; break;
            case CREATE_ROOM_v1_0: context = createRoomCommand1_0; break;
            case CREATE_QUEUE_v1_0: context = createQueueCommand1_0; break;
        }
        await context.execute(data, id)
    } catch (e) {
        error(`id: ${event.id}, command ${event.data}, message: ${e.message}`, __filename, 'executeCommand', 'error')
        console.log(e.message)
    }
}

module.exports = {
    executeCommand
}