const express = require("express");
const generalController = require("../controller/generalController");
const detailsController = require("../controller/detailsController");

var router = express.Router();

router.get("/", generalController.welcome);

// user routes
router.get("/details/:email", detailsController.getDetails);
router.post("/saveDetails", detailsController.saveDetails);
module.exports = router;
