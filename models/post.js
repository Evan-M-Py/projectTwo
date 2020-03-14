module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define("Comment", {

        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 35]
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1, 5]
            }
        },
        venue: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[8,10]
            }
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1, 300]
        }
    });

    Comment.associate = function (models) {
        Comment.belongsTo(models.Bands, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Comment;
};