const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");
const User = require('../models/userModels')



// GET All users data  
exports.getUsers = BigPromise(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    data: {
      length: users.length,
      users
    }
  })
})

