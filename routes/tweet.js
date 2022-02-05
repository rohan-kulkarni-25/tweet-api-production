const express = require('express');
const { getTweets ,addTweet } = require('../controllers/tweetController');
const router = express.Router();

router.route('/tweets').get(getTweets)
router.route('/tweet').post(addTweet)

module.exports = router;