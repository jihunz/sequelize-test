const Sequelize = require('sequelize');

class NiModule extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            niModuleId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(100),
            },
            productTypeOfficialName: {
                type: Sequelize.STRING(50),
            },
            productNumberOfficialName: {
                type: Sequelize.INTEGER,
            },
            desc: {
                type: Sequelize.STRING(255),
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            createdUser: {
                type: Sequelize.STRING(45),
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedUser: {
                type: Sequelize.STRING(45),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'niModule',
            tableName: 'ni_module',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.NiModule.belongsToMany(db.Sensor, { foreignKey: 'ni_module_id', through: 'sensor_module_mapper'});
    }
};

module.exports = NiModule;