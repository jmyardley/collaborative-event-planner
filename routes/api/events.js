const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/create")
  .post(eventController.create);

router.route("/")
  .get(eventController.findAll);
 

module.exports = router;
