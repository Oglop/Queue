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
        CREATE_APPOINTMENT_v1_0: 'create_appointment_v1.0',
        CREATE_ROOM_v1_0: 'create_room_v1.0',
        CREATE_USER_v1_0: 'create_user_v1.0',
        CREATE_INVITATION_v1_0: 'create_invitation_v1.0',
        CREATE_ROOM_v1_0: 'create_room_v1.0',
        CREATE_QUEUE_v1_0: 'create_queue_v1.0'
    },
    LICENCE_STATUS: {
        INACTIVE: 0,
        ACTIVE: 1,
        EXPIRED: 2,
        REJECTED: 3
    },
    LICENCE_TYPE: {
        TRIAL: 0,
        FULL: 1,
        INHERITED: 2
    }
}