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
            createdDate: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            creator: {
                type: Sequelize.STRING(50),
            },
            updatedDate: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            editor: {
                type: Sequelize.STRING(50),
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
        db.NiModule.belongsToMany(db.Sensor, { foreignKey: 'ni_module_id', through: 'sensor_module_mapping'});
    }
};

module.exports = NiModule;