const express = require('express');
const postRouter = require('./routes/postRouter');
const ErrorHandler = require('./utils/error-handle');

const app = express();

app.use(express.json({limit: '10kb'}));

app.use('/', (req, res, next) => {
  req.timer = new Date().getMilliseconds();

  next();
});

app.use('/v1/blog/post', postRouter);

//Wrong routes
app.use('*', (req, res, next) => {
  next(new ErrorHandler(`${req.originalUrl} url is not found`, 404));
});

//Init global error handling
app.use(errorController);

module.exports = app;
