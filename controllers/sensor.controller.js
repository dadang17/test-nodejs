const Sensor = require("../models/sensor");

module.exports = {
  getAllDataSensor: async (req, res) => {
    try {
      const dataSensors = await Sensor.find({}, "-__v");
      res.status(200).json(dataSensors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getDataSensorByID: async (req, res) => {
    try {
      const { id } = req.params;
      const sensor = await Sensor.findById(id, "-__v");
      res.status(200).json(sensor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    // Sensor.findById(req.params.id, "-__v").then((sensorFound) => {
    //   if (sensorFound === null) {
    //     res.status(404).json({
    //       message: "Not Found!",
    //     });
    //   } else {
    //     res.status(200).json(sensorFound);
    //   }
    // });
  },

  addDataSensor: async (req, res) => {
    try {
      const sensor = await Sensor.create(req.body);
      res.status(200).json({ message: "data has been created" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }

    // // const sensor = new Sensor(data);
    // //console.log(sensor);
    // sensor.save();

    // res.json({
    //   message: "data has been created",
    // });
  },

  deleteDataSensorByID: async (req, res) => {
    try {
      const { id } = req.params;
      const sensor = await Sensor.findByIdAndDelete(id);
      if (!sensor) {
        return res
          .status(404)
          .json({ message: `cannot find any sensor with ${id}` });
      }
      res.status(200).json({ message: "Deleted Succesfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    // Sensor.findByIdAndRemove(req.params.id).then((sensorFound) => {
    //   if (sensorFound === null) {
    //     res.status(404).json({
    //       message: "Not Found!",
    //     });
    //   } else {
    //     res.status(201).json({
    //       message: "Deleted Succesfully",
    //     });
    //   }
    // });
  },

  updateDataSensorByID: async (req, res) => {
    try {
      const { id } = req.params;
      const sensor = await Sensor.findByIdAndUpdate(id, req.body);
      if (!sensor) {
        return res
          .status(404)
          .json({ message: `cannot find any sensor with ${id}` });
      }
      const updatedSensor = await Sensor.findById(id, "-__v");
      res.status(200).json(updatedSensor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    // Sensor.updateOne({ _id: req.params.id }, req.body).then((sensorFound) => {
    //   if (sensorFound === null) {
    //     res.status(404).json({
    //       message: "Not Found!",
    //     });
    //   } else {
    //     res.status(201).json({
    //       message: "update Succesfully",
    //     });
    //   }
    // });
  },
};
