const Sequelize = require('sequelize');

class AccelerometerChannel extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            accelerometerChannelId: {
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
                defaultValue: 'Pseudodifferential',
            },
            sesitivity: {
                type: Sequelize.DOUBLE,
                defaultValue: 100.00,
            },
            sensitivityUnits: {
                type: Sequelize.STRING(45),
                defaultValue: 'mVolts/G',
            },
            currentExcitationSource: {
                type: Sequelize.STRING(45),
                defaultValue: 'Internal',
            },
            currentExcitationValue: {
                type: Sequelize.DOUBLE,
                defaultValue: 0.004,
            },
            aiAccelerationUnits: {
                type: Sequelize.STRING(45),
            },
            customScaleName: {
                type: Sequelize.STRING(90),
            },
            inputCoupling: {
                type: Sequelize.STRING(45),
                defaultValue: 'AC',
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
            modelName: 'accelerometerChannel',
            tableName: 'accelerometer_channel',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.AccelerometerChannel.belongsTo(db.Sensor, { foreignKey: 'sensor_id', targetKey: 'sensorId'});
    }
};

module.exports = AccelerometerChannel;