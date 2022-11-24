const Sequelize = require('sequelize');

class ThermocoupleChannel extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            thermocoupleChannelId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(255),
            },
            maximum: {
                type: Sequelize.DOUBLE,
            },
            minimum: {
                type: Sequelize.DOUBLE,
            },
            thermocoupleType: {
                type: Sequelize.STRING(45),
            },
            thermocoupleTempUnit: {
                type: Sequelize.STRING(45),
            },
            cjcType: {
                type: Sequelize.STRING(45),
            },
            cjcValue: {
                type: Sequelize.DOUBLE,
            },
            cjcChannel: {
                type: Sequelize.STRING(45),
            },
            isScxiModule: {
                type: Sequelize.BOOLEAN,
            },
            autoZeroType: {
                type: Sequelize.STRING(45),
            },
            description: {
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
            sensorTypeId: {
                type: Sequelize.BIGINT,
                foreignKey: true,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'thermocoupleChannel',
            tableName: 'thermocouple_channel',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.ThermocoupleChannel.belongsTo(db.Sensor, { foreignKey: 'sensor_id', targetKey: 'sensorId'});
    }
};

module.exports = ThermocoupleChannel;