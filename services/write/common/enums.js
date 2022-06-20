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
        CREATE_APPOINTMENT_v1_0: 'create_appointment',
        CREATE_ROOM_v1_0: 'create_room',
        CREATE_USER_v1_0: 'create_user',
        CREATE_INVITATION_v1_0: 'create_invitation',
        CREATE_ROOM_v1_0: 'create_room'
    }
}