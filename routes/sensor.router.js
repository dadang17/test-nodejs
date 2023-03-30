const express = require("express");
const router = express.Router();

const {
  getAllDataSensor,
  getDataSensorByID,
  addDataSensor,
  deleteDataSensorByID,
  updateDataSensorByID,
} = require("../controllers/sensor.controller");

router.get("/", getAllDataSensor);
router.get("/:id", getDataSensorByID);
router.post("/", addDataSensor);
router.delete("/:id", deleteDataSensorByID);
router.patch("/:id", updateDataSensorByID);

module.exports = router;
