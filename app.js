const express = require("express");
const app = express();
const db = require("./config/db");
const bodyParser = require("body-parser");

const allRoutes = require("./routes");

const PORT = process.env.PORT || 3000;

db.then(() => {
  console.log("database terkoneksi");
}).catch((err) => {
  console.log(err);
});

app.use(bodyParser.json());
app.use(express.json());
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
