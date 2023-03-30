const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const db_url =
  "mongodb+srv://iskandardzulqornain38:dadang123@mongodb-dadang.g2jqw6s.mongodb.net/ex-data-db?retryWrites=true&w=majority";

const db = mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
