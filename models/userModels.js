const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  author:{
    type:String,
    required:[true,"Please provide tweet author"]
  },
  authorEmail: {
    type: String,
    required:[true,"Please provide author email"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
