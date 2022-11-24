const Sequelize = require('sequelize');

class Company extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            companyId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            companyName: {
                type: Sequelize.STRING(45),
            },
            address: {
                type: Sequelize.STRING(255),
            },
            mainProduct: {
                type: Sequelize.STRING(90),
            },
            employee_count: {
                type: Sequelize.INTEGER,
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
            modelName: 'company',
            tableName: 'company',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Company.hasMany(db.Users, { foreignKey: 'company_id', sourceKey: 'companyId'});
        db.Company.hasMany(db.CompanyFacilityMapper, { foreignKey: 'company_id', sourceKey: 'companyId'});
        db.Company.belongsTo(db.Industrial, { foreignKey: 'industrial_id', targetKey: 'industrialId'});
        db.Company.belongsToMany(db.Task, { foreignKey: 'company_id', through: 'task_company_mapper' });
    }
};

module.exports = Company;