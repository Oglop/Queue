const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class Appointment extends Model {}
Appointment.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        references: {
            model: 'client',
            key: 'id'
        },
        allowNull: false,
        unique: true
    },
    queueId: {
        type: DataTypes.STRING,
        references: {
            model: 'queue',
            key: 'id'
        },
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING,
        references: {
            model: 'user',
            key: 'id'
        },
        allowNull: false
    },
    message: {
        type: DataTypes.STRING
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    stopTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'appointment'
})

module.exports = Appointment