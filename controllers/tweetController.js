const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");
const Tweet = require('../models/tweetModel')
const User = require('../models/userModels')


// GET All tweets
exports.getTweets = BigPromise(async (req, res, next) => {
  const tweets = await Tweet.find();
  res.status(200).json({
    success: true,
    data: {
      length: tweets.length,
      tweets
    }
  })
})


// POST add tweet
exports.addTweet = BigPromise(async (req, res, next) => {
  const { tweetMessage, author, authorEmail, authorImg } = req.body;

  // console.log(req.data);
  // Checking Email and Password are provided or not
  if (!authorEmail || !author) {
    next(new CustomError('Please Enter Email & Author name', 400))
  }

  // Checking If recipe Name is provided
  if (!tweetMessage) {
    next(new CustomError('Please provide tweet message', 400))
  }

  // Check if user already exists 
  let user = await User.findOne({ authorEmail });

  // If User is not available then create new user
  if (!user) {
    // Create User with help of EMAIL & NAME
    const userObject = {
      author,
      authorEmail,
      authorImg
    }
    user = await User.create(userObject)

  }
  console.log(user);
  // Creating New Tweet
  const data = {
    tweetMessage,
    author,
    authorEmail,
    authorImg
  }

  const tweet = await Tweet.create(data)


  // Sending Response
  res.send({
    success: true,
    message: 'Tweet Added!',
    tweet
  })
})
