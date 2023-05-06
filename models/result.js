const mongoose = require("mongoose");

const { Schema } = mongoose;

const resultSchema = new Schema(
  {
    volume_irrigation: {
      type: Number,
      required: true,
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
