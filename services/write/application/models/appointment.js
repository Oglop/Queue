const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class Appointment extends Model {}
Appointment.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
    },
    queueId: {
        type: DataTypes.STRING,
        references: 'queue',
        referencesKey: 'id'
    },
    userId: {
        type: DataTypes.STRING,
        references: 'user',
        referencesKey: 'id'
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