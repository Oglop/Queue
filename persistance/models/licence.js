const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Licence extends Model {}
Licence.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    key: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    expiry: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false
    },
    maxUsers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    }
}, {
    sequelize,
    modelName: 'licence'
})

module.exports = Licence
