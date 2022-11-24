const Sequelize = require('sequelize');

class Sensor extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            sensorId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            sensorName: {
                type: Sequelize.STRING(100),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'sensor',
            tableName: 'sensor',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Sensor.belongsTo(db.SensorType, { foreignKey: 'sensor_type_id', targetKey: 'sensorTypeId'});

        db.Sensor.hasMany(db.VoltageChannel, { foreignKey: 'sensor_id', sourceKey: 'sensorId'});
        db.Sensor.hasMany(db.CurrentChannel, { foreignKey: 'sensor_id', sourceKey: 'sensorId'});
        db.Sensor.hasMany(db.MicrophoneChannel, { foreignKey: 'sensor_id', sourceKey: 'sensorId'});
        db.Sensor.hasMany(db.AccelerometerChannel, { foreignKey: 'sensor_id', sourceKey: 'sensorId'});
        db.Sensor.hasMany(db.ThermocoupleChannel, { foreignKey: 'sensor_id', sourceKey: 'sensorId'});

        db.Sensor.belongsToMany(db.NiModule, { foreignKey: 'sensor_id', through: 'sensor_module_mapper'});
    }
};

module.exports = Sensor;