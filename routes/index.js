const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");
const sensorRouter = require("./sensor.router");
const resultRouter = require("./result.router");

router.use("/user", userRouter);
router.use("/sensor", sensorRouter);
router.use("/result", resultRouter);

module.exports = router;
