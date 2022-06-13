const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class Role extends Model {}
Role.init({
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
    modelName: 'role'
})


//Role.belongsToMany(User, {through: 'roleUsers'});
module.exports = Role