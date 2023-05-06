const express = require("express");
const router = express.Router();

const {
  getAllResult,
  getResultByID,
  addResult,
  deleteResultByID,
  updateResultByID,
} = require("../controllers/result.controller");

router.get("/", getAllResult);
router.get("/:id", getResultByID);
router.post("/", addResult);
router.delete("/:id", deleteResultByID);
router.patch("/:id", updateResultByID);

module.exports = router;
