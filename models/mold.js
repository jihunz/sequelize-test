const Sequelize = require('sequelize');

class Mold extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            moldId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            moldName: {
                type: Sequelize.STRING(45),
            },
            product: {
                type: Sequelize.STRING(45),
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
            modelName: 'mold',
            tableName: 'mold',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Mold.belongsToMany(db.Facility, { foreignKey: 'mold_id', through: 'mold_facility_mapper'});
    }
};

module.exports = Mold;