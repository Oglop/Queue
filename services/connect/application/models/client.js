const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class Client extends Model {}
Client.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    secret: {
        type: DataTypes.STRING
    },
    issuer: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'client'
})

module.exports = Client