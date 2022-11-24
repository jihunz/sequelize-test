const Sequelize = require('sequelize');

class Role extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            roleId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            roleName: {
                type: Sequelize.STRING(45),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'role',
            tableName: 'role',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Role.hasMany(db.Users, { foreignKey: 'role_id', sourceKey: 'roleId'});
    }
};

module.exports = Role;