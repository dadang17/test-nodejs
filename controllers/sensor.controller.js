const Sensor = require("../models/sensor");

module.exports = {
  getAllDataSensor: async (req, res) => {
    const dataSensors = await Sensor.find({}, "-__v");

    res.json({
      message: "success get data user",
      data: dataSensors,
    });
  },

  getDataSensorByID: (req, res) => {},

  addDataSensor: (req, res) => {
    const data = req.body;
    const sensor = new Sensor(data);
    //console.log(sensor);
    sensor.save();

    res.json({
      message: "data has been created",
    });
  },

  deleteDataSensorByID: (req, res) => {},

  updateDataSensorByID: (req, res) => {},
};
