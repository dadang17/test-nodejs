const Result = require("../models/result");

module.exports = {
  getAllResult: async (req, res) => {
    try {
      const result = await Result.find({}, "-__v");
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getResultByID: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Result.findById(id, "-__v");
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addResult: async (req, res) => {
    try {
      const result = await Result.create(req.body);
      res.status(200).json({ message: "data has been created" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  },

  deleteResultByID: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Result.findByIdAndDelete(id);
      if (!result) {
        return res
          .status(404)
          .json({ message: `cannot find any sensor with ${id}` });
      }
      res.status(200).json({ message: "Deleted Succesfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateResultByID: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Result.findByIdAndUpdate(id, req.body);
      if (!result) {
        return res
          .status(404)
          .json({ message: `cannot find any sensor with ${id}` });
      }
      const updatedResult = await Result.findById(id, "-__v");
      res.status(200).json(updatedResult);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
