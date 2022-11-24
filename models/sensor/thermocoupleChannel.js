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
            sensorId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                foreignKey: true,
                allowNull: false,

            },
            sensorTypeId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                foreignKey: true,
                allowNull: false,

            },
            name: {
                type: Sequelize.STRING(255),
            },
            maximum: {
                type: Sequelize.DOUBLE,
                defaultValue: 500,
                validate: { isNumeric: true },
            },
            minimum: {
                type: Sequelize.DOUBLE,
                defaultValue: 0,
                validate: { isNumeric: true },
            },
            thermocoupleType: {
                type: Sequelize.STRING(45),
                defaultValue: 'K',
            },
            thermocoupleTempUnit: {
                type: Sequelize.STRING(45),
            },
            cjcType: {
                type: Sequelize.STRING(45),
                defaultValue: 'Internal',
            },
            cjcValue: {
                type: Sequelize.DOUBLE,
            },
            cjcChannel: {
                type: Sequelize.STRING(45),
            },
            isScxiModule: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            autoZeroType: {
                type: Sequelize.STRING(45),
            },
            description: {
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