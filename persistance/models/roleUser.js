/*
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class RoleUser extends Model {}
RoleUser.init({
    userId: {
        type: DataTypes.STRING,
        references: 'users',
        referencesKey: 'id'
    },
    roleId: {
        type: DataTypes.STRING,
        references: 'roles',
        referencesKey: 'id'
    }
}, {
    sequelize,
    modelName: 'roleUser'
})

module.exports = RoleUser 
*/