const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Client extends Model {}
Client.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    secret: {
        type: DataTypes.STRING,
        allowNull: false
    },
    issuer: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'client'
})

module.exports = Client