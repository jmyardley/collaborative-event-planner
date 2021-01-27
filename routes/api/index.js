const router = require("express").Router();
const userRoutes = require("./users");
const eventRoutes = require("./events");
const itemRoutes = require("./items");

router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use("/items", itemRoutes);
module.exports = router;
