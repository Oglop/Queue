const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')

class UserLicence extends Model {}
UserLicence.init({
    userId: {
        type: DataTypes.STRING,
        references: {
            model: 'users',
            key: 'id'
        },
        allowNull: false
    },
    licenceId: {
        type: DataTypes.STRING,
        references: {
            model: 'licences',
            key: 'id'
        },
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user_licence'
})

module.exports = UserLicence