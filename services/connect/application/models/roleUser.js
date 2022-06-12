const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class RoleUser extends Model {}
RoleUser.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.STRING,
        references: 'user',
        referencesKey: 'id'
    },
    roleId: {
        type: DataTypes.STRING,
        references: 'role',
        referencesKey: 'id'
    }
}, {
    sequelize,
    modelName: 'roleUser'
})

module.exports = RoleUser