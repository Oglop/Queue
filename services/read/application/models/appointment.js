const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class Appointment extends Model {}
Appointment.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    queueId: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.STRING
    },
    message: {
        type: DataTypes.STRING
    },
    startTime: {
        type: DataTypes.DATE
    },
    stopTime: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.INTEGER
    }

}, {
    sequelize,
    modelName: 'appointment'
})

module.exports = Appointment