const mongoose = require("mongoose");

const { Schema } = mongoose;

const sensorSchema = new Schema(
  {
    adc: Number,
    tegangan: Number,
    soil: Number,
  },
  {
    timestamps: true,
  }
);

const Sensor = mongoose.model("Sensor", sensorSchema);

module.exports = Sensor;
