const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Audience extends Model {}
Audience.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    clientId: {
        type: DataTypes.STRING,
        references: {
            model: 'clients',
            key: 'id'
        },
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'audience'
})

module.exports = Audience