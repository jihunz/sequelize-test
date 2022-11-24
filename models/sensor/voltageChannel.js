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
            name: {
                type: Sequelize.STRING(255),
            },
            maximum: {
                type: Sequelize.DOUBLE,
            },
            minimum: {
                type: Sequelize.DOUBLE,
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