const router = require("express").Router();
const itemController = require("../../controllers/itemController");
 
router.route("/:id")
  .put(itemController.updateById);

module.exports = router;
