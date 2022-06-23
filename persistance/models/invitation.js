const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Invitation extends Model {}
Invitation.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    by: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        references: {
            model: 'users',
            key: 'email'
        }
    },
    message: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    }
}, {
    sequelize,
    modelName: 'invitation'
})

module.exports = Invitation