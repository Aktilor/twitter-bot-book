const config = require('./config/config');
const tweet = require('./lib/tweet');

setInterval(tweet.tweetBook, config.tweet_interval);
