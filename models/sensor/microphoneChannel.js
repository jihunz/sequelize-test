const Sequelize = require('sequelize');

class MicrophoneChannel extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            microphoneChannelId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(255),
            },
            microphoneSensitivity: {
                type: Sequelize.DOUBLE,
            },
            maximumSoundPressureLevel: {
                type: Sequelize.DOUBLE,
            },
            terminalConfiguration: {
                type: Sequelize.STRING(45),
            },
            currentExcitationSource: {
                type: Sequelize.STRING(45),
            },
            currentExcitationValue: {
                type: Sequelize.DOUBLE,
            },
            soundPressureUnits: {
                type: Sequelize.STRING(45),
            },
            customScaleName: {
                type: Sequelize.STRING(90),
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
            modelName: 'microphoneChannel',
            tableName: 'microphone_channel',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.MicrophoneChannel.belongsTo(db.Sensor, { foreignKey: 'sensor_id', targetKey: 'sensorId'});
    }
};

module.exports = MicrophoneChannel;