const errorHendeler = (error, req, res, next) => {
  const errorstatus = error.status || 500;
  const errormessage = error.message || 'unknow error';
  return res.status(errorstatus).json({
    message: errormessage,
    status: errorstatus,
    stack: error.stack,
  });
};

module.exports = errorHendeler;
