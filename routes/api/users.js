const router = require("express").Router();
const passport = require("passport");
const userController = require("../../controllers/userController");

router.route("/signup")
  .post(userController.create);

router.route("/login")
  .post(userController.login);

 

module.exports = router;
