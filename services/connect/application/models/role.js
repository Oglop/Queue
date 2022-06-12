const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class Role extends Model {}
Role.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    clientId: {
        type: DataTypes.STRING,
        references: 'client',
        referencesKey: 'id'
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'role'
})

module.exports = Role