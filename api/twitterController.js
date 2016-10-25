const Twitter = require('twitter-node-client').Twitter;
const config = require('../config');

const error = function (err, response, body) {
  if (err)
    console.log('Error: ' + JSON.stringify(err));
};

const twitter_config = {
  "consumerKey": config.consumer_key,
  "consumerSecret": config.consumer_secret,
  "accessToken": config.access_token,
  "accessTokenSecret": config.access_token_secret,
  "callBackUrl": config.callback_url
};

const twitter = new Twitter(twitter_config);

module.exports = {
  getTimeline: (req, res) => {
    twitter.getUserTimeline({screen_name: req.body.data, count: 25}, error, (data) => {
      console.log(JSON.stringify(data));
      res.json(data);
    });
  }
};
