const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class Queue extends Model {}
Queue.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    roomId: {
        type: DataTypes.STRING,
        references: {
            model: 'rooms',
            key: 'id'
        },
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'queue'
})

module.exports = Queue
