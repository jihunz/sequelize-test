const Sequelize = require('sequelize');

class SensorType extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            sensorTypeId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(100),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'sensorType',
            tableName: 'sensor_type',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.SensorType.hasMany(db.Sensor, { foreignKey: 'sensor_type_id', targetKey: 'sensorTypeId'});
    }
};

module.exports = SensorType;