require('dotenv').config()

module.exports = {
    READ_PORT: process.env.READ_PORT,
    WRITE_PORT: process.env.WRITE_PORT,
    CONNECT_PORT: process.env.CONNECT_PORT,
    HOST: process.env.HOST,
    DEFAULT_PAGE_SIZE: process.env.DEFAULT_PAGE_SIZE,
    ACCESS_SECRET_KEY: process.env.ACCESS_SECRET_KEY,
    REFRESH_SECRET_KEY: process.env.REFRESH_SECRET_KEY,
    ADMIN_USER_NAME: process.env.ADMIN_USER_NAME,
    ADMIN_USER_EMAIL: process.env.ADMIN_USER_EMAIL,
    ADMIN_USER_PASSWORD: process.env.ADMIN_USER_PASSWORD,
    ADMIN_ROLE_NAME: process.env.ADMIN_ROLE_NAME,
    ADMIN_SCOPE: process.env.ADMIN_SCOPE,
    OWNER_ROLE_NAME: process.env.OWNER_ROLE_NAME,
    USER_ROLE_NAME: process.env.USER_ROLE_NAME,
    SCOPES: {
        ROOM_READ: 'room.read',
        ROOM_WRITE: 'room.write',
        USER_READ: 'user.read',
        USER_WRITE: 'user.write',
        USER_INVITE: 'user.invite'
    }
}