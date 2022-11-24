const Sequelize = require('sequelize');

class Users extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            userName: {
                type: Sequelize.STRING(15),
            },
            email: {
                type: Sequelize.STRING(150),
            },
            password: {
                type: Sequelize.STRING(255),
            },
            phone: {
                type: Sequelize.STRING(15),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'users',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Users.belongsTo(db.Role, { foreignKey: 'role_id', targetKey: 'roleId'});
        db.Users.belongsTo(db.Company, { foreignKey: 'company_id', targetKey: 'companyId'});
    }
};

module.exports = Users;