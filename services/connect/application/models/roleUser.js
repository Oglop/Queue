const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class RoleUser extends Model {}
RoleUser.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userId: {
        type: DataTypes.STRING,
        references: {
            model: 'users',
            key: 'id'
        },
        allowNull: false
    },
    roleId: {
        type: DataTypes.STRING,
        references: {
            model: 'roles',
            key: 'id'
        },
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'roleUser'
})

module.exports = RoleUser