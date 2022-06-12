const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log("Server listening to port " + port);
});
