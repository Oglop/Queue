const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('queue-db', 'login', 'password', {
    dialect: 'sqlite',
    host: './databases/queue.sqlite'// ':memory:'
})

module.exports = sequelize