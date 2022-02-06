const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  tweetMessage: {
    type: String,
    required: [true, "Please provide tweet message"],
  },
  author:{
    type:String,
    required:[true,"Please provide tweet author"]
  },
  authorEmail: {
    type: String,
    required:[true,"Please provide author email"]
  },
  authorImg: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tweet", tweetSchema);
