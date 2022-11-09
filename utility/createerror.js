/**
 * create error
 *
 */

const createError = (msg, status) => {
  const error = new Error();
  error.message = msg;
  error.satatus = status;
  return error;
};

module.exports = createError;
