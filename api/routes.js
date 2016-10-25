const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('/' + req.method);
  next();
});

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const twitterController = require('./twitterController');

router.post('/tweets', twitterController.getTimeline);

module.exports = router;
