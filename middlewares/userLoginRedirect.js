const cookie = require('cookie-parser');
const validation = require('../utility/validator');
const loginUserRedicet = (req, res, next) => {
  const token = req.cookies.authToken;
  console.log(token);
  if (!token) {
    validation('Please login', '/login', req, res);
  } else {
    next();
  }
};

module.exports = loginUserRedicet;
