function devErrHandle(err, res) {
  //Send back as much
  res.status(err.statusCode).json({
    error: err,
    stack: err.stack,
    status: err.status,
    message: err.message,
  });
}

function proErrHandle(error, res) {
  if (err.isOps) {
    //Operational err
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    //Programming error to send a back a gen message
    console.error('XXErrorXX', err);

    res.status(500).json({
      status: '500',
      message: 'Something went wrong',
    });
  }
}

module.exports = (err, req, res, next) => {
  //Def error code
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'fail';

  if (process.env.NODE_ENV === 'development') {
    devErrHandle(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = {...err};

    proErrHandle(error, res);
  }
};
