const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const bodyParser = require("body-parser");

const allRoutes = require("./routes");

const PORT = process.env.PORT || 3000;

db.then(() => {
  console.log("database terkoneksi");
}).catch((error) => {
  console.log(error);
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});
