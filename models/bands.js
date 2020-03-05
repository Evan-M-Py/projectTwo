
const sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

    const Bands = sequelize.define("Bands", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        bandName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        },

        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }

        },

        homeTown: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 45]
            }
        },

        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

    });

    Bands.associate = function (models) {
        Bands.hasMany(models.Comment, {
            
            
            onDelete: "cascade"
            
        });

    };

    return Bands;
};