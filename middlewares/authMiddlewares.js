const cookie = require('cookie-parser');
const validation = require('../utility/validator');
const authMiddlewares = (req, res, next) => {
  const token = req.cookies.authToken;
  if (token) {
    validation('please login', '/students/profile', req, res);
  } else {
    next();
  }
};

module.exports = authMiddlewares;
