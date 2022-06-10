require('dotenv').config()

module.exports = {
    READ_PORT: process.env.READ_PORT,
    WRITE_PORT: process.env.WRITE_PORT,
    CONNECT_PORT: process.env.CONNECT_PORT,
    HOST: process.env.HOST,
    SECRET_KEY: process.env.SECRET_KEY
}