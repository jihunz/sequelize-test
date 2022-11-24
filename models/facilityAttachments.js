const Sequelize = require('sequelize');

class FacilityAttachments extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            facilityid: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                foreignKey: true,
                allowNull: false,
            },
            attachmentsPath: {
                type: Sequelize.STRING(255),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'facilityAttachments',
            tableName: 'facility_attachments',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.FacilityAttachments.belongsTo(db.Facility, { foreignKey: 'facility_id', targetKey: 'facilityId'});
    }
};

module.exports = FacilityAttachments;