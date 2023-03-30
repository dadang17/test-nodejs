const Sensor = require("../models/sensor");

module.exports = {
  getAllDataSensor: async (req, res) => {
    const dataSensors = await Sensor.find({}, "-__v");

    res.json({
      message: "success get data user",
      data: dataSensors,
    });
  },

  getDataSensorByID: (req, res) => {
    Sensor.findById(req.params.id, "-__v").then((sensorFound) => {
      if (sensorFound === null) {
        res.status(404).json({
          message: "Not Found!",
        });
      } else {
        res.status(200).json(sensorFound);
      }
    });
  },

  addDataSensor: (req, res) => {
    const data = req.body;
    const sensor = new Sensor(data);
    //console.log(sensor);
    sensor.save();

    res.json({
      message: "data has been created",
    });
  },

  deleteDataSensorByID: (req, res) => {
    Sensor.findByIdAndRemove(req.params.id).then((sensorFound) => {
      if (sensorFound === null) {
        res.status(404).json({
          message: "Not Found!",
        });
      } else {
        res.status(201).json({
          message: "Deleted Succesfully",
        });
      }
    });
  },

  updateDataSensorByID: (req, res) => {
    Sensor.updateOne({ _id: req.params.id }, req.body).then((sensorFound) => {
      if (sensorFound === null) {
        res.status(404).json({
          message: "Not Found!",
        });
      } else {
        res.status(201).json({
          message: "update Succesfully",
        });
      }
    });
  },
};
