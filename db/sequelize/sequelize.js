const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.db,
  process.env.dbUser,
  process.env.dbPassword,
  {
    host: process.env.host,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
);

const makeDbConntection = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({
      force: false,
      // force: true,
    });
    console.log("Database Connection has been established successfully.");
  } catch (error) {
    console.error("Database Connection err ", error);
  }
};

module.exports = { sequelize, makeDbConntection };
