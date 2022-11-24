const Sequelize = require('sequelize');

class CompanyFacilityMapper extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            companyFacilityMapperId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'companyFacilityMapper',
            tableName: 'company_facility_mapper',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.CompanyFacilityMapper.belongsTo(db.Company, { foreignKey: 'company_id', targetKey: 'companyId'});
        db.CompanyFacilityMapper.belongsTo(db.Facility, { foreignKey: 'facility_id', targetKey: 'facilityId'});
    }
};

module.exports = CompanyFacilityMapper;