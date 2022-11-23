const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
        static init(sequelize) {
            return super.init({
                comment: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: true,
                    defaultValue: Sequelize.NOW,
                },
            }, {
                sequelize,
                timestamps: false,
                underscored: true,
                modelName: 'Comment',
                tableName: 'comments',
                paranoid: false,
                charset: 'utf8mb4',
                collate: 'utf8mb4_general_ci'
            });
        }
    static associate(db) {
        db.Comment.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id', onDelete: 'cascade'});
    }
};

module.exports = Comment;