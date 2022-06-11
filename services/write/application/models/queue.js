const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class Queue extends Model {}
Queue.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    roomId: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'queue'
})

module.exports = Queue
