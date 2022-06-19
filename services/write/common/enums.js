module.exports = {
    APPOINTMENT_STATUS: {
        NONE: 0,
        CANCELED: 1,
        ACCEPTED: 2,
        WAITING_FOR_CONFIRMATION: 3,
    },
    REQUEST_TYPE: {
        CREATE_FORCE: 0,
        CREATE_CONFIRM: 1,
        CANCEL: 2,
        UPDATE: 3
    },
    COMMANDS: {
        CREATE_APPOINTMENT: 'create_appointment',
        CREATE_ROOM: 'create_room',
        CREATE_USER: 'create_user',
        CREATE_INVITATION: 'create_invitation'
    }
}