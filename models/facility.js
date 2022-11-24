const Sequelize = require('sequelize');

class Facility extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            facilityId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            facilityName: {
                type: Sequelize.STRING(45),
            },
            modelName: {
                type: Sequelize.STRING(45),
            },
            maximumLoadValue: {
                type: Sequelize.DOUBLE,
            },
            minimumLoadValue: {
                type: Sequelize.DOUBLE,
            },
            loadUnit: {
                type: Sequelize.STRING(25),
            },
            maximunTemperature: {
                type: Sequelize.DOUBLE,
            },
            minimumTemperature: {
                type: Sequelize.DOUBLE,
            },
            maximumStroke: {
                type: Sequelize.DOUBLE,
            },
            minimumStroke: {
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
            modelName: 'facility',
            tableName: 'facility',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Facility.hasMany(db.CompanyFacilityMapper, { foreignKey: 'facility_id', sourceKey: 'facilityId'});
        db.Facility.hasMany(db.FacilityAttachments, { foreignKey: 'facility_id', sourceKey: 'facilityId'});
        db.Facility.belongsToMany(db.Mold, { foreignKey: 'facility_id', through: 'mold_facility_mapper'});
    }
};

module.exports = Facility;