const mongoose = require("mongoose");

const { Schema } = mongoose;

const resultSchema = new Schema(
  {
    volume_irrigation: {
      type: Number,
      required: true,
    },
    penyiraman: { type: String, required: String },
    pemupukan: {
      type: String,
      required: String,
    },
    description_result: {
      type: String,
      required: String,
    },
  },
  {
    timestamps: true,
  }
);

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
