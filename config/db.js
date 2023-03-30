require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const db_url = process.env.mongoURL;

const db = mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
