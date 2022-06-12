const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router/routes");
const db = require("./db/sequelize/sequelize");

require("dotenv").config();
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

// Establishing database connection
db.makeDbConntection();

app.listen(port, () => {
  console.log("Server listening to port " + port);
});
