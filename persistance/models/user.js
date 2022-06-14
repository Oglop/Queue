const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')
const Role = require('./role')

class User extends Model {}
User.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    roleId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
})


/*
User.belongsToMany(Role, {
    through: "roleUser",
    foreignKey: "userId"
});
Role.belongsToMany(User, {
    through: "roleUser",
    foreignKey: "roleId"
});
*/



//User.belongsToMany(Role, {through: 'roleUsers'});

//User.belongsToMany(RoleUser, { through: 'roleUsers', foreignKey: 'roleId' })
module.exports = User