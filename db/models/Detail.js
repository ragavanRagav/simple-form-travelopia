const { DataTypes } = require("sequelize");
const { sequelize } = require("../sequelize/sequelize");

const DetailModel = {
  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  noTravelers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budget: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Detail = sequelize.define("details", DetailModel, {
  freezeTableName: true,
  timestamps: false
});


module.exports = { Detail };
