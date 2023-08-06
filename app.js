const express = require('express');
const postRouter = require('./routes/postRouter');

const app = express();

app.use(express.json({limit: '10kb'}));

app.use('/', (req, res, next) => {
  req.timer = new Date().getMilliseconds();

  next();
});

app.use('/v1/blog/post', postRouter);

module.exports = app;
