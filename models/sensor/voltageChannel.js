const Sequelize = require('sequelize');

class VoltageChannel extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            voltageChannelId: {
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
                defaultValue: 10.00,
                validate: { isNumeric: true },
            },
            minimum: {
                type: Sequelize.DOUBLE,
                defaultValue: -10.00,
                validate: { isNumeric: true },
            },
            terminalConfiguration: {
                type: Sequelize.STRING(45),
            },
            voltageUnit: {
                type: Sequelize.STRING(45),
            },
            customScale: {
                type: Sequelize.STRING(90),
            },
            sesitivity: {
                type: Sequelize.DOUBLE,
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
            modelName: 'voltageChannel',
            tableName: 'voltage_channel',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.VoltageChannel.belongsTo(db.Sensor, { foreignKey: 'sensor_id', targetKey: 'sensorId'});
    }
};

module.exports = VoltageChannel;