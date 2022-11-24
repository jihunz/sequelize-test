const Sequelize = require('sequelize');

class TaskWidget extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            taskWidgetId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            taskId: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                foreignKey: true,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING(255),
            },
            data: {
                type: Sequelize.DOUBLE,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'taskWidget',
            tableName: 'task_widget',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }

    static associate(db) {
        db.TaskWidget.belongsTo(db.Task, { foreignKey: 'task_id', targetKey: 'taskId'});
    }
};

module.exports = TaskWidget;