const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");
const sensorRouter = require("./sensor.router");

router.use("/user", userRouter);
router.use("/sensor", sensorRouter);

module.exports = router;
