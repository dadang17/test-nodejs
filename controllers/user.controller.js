const User = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find({}, "-__v -password");

    res.json({
      message: "success get data user",
      data: users,
    });
  },

  getUserByID: (req, res) => {},

  addUser: (req, res) => {
    const data = req.body;
    const user = new User(data);
    //console.log(user);
    user.save();

    res.json({
      message: "data has been created",
    });
  },

  deleteUserByID: (req, res) => {},

  updateUserByID: (req, res) => {},
};
