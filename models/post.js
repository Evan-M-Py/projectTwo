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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1, 250]
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