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