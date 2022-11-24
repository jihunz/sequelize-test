const Sequelize = require('sequelize');

class Industrial extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            industrialId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            industrialName: {
                type: Sequelize.STRING(45),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'industrial',
            tableName: 'industrial',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Industrial.belongsTo(db.Company, { foreignKey: 'company_id', targetKey: 'companyId'});
    }
};

module.exports = Industrial;