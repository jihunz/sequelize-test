const Sequelize = require('sequelize');

class Task extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            taskId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            taskName: {
                type: Sequelize.STRING(100),
            },
            description: {
                type: Sequelize.STRING(255),
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            userId: {
                type: Sequelize.STRING(45),
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'task',
            tableName: 'task',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.Task.hasMany(db.TaskWidget, { foreignKey: 'task_id', sourceKey: 'taskId'});
        db.Task.belongsToMany(db.Company, { foreignKey: 'task_id', through: 'task_company_mapper' });
    }
};

module.exports = Task;