const jwt = require('jsonwebtoken');

const tokenFun = (preload, exp = '1d') => {
  const token = jwt.sign(preload, process.env.JWT_SECRECT, {
    expiresIn: exp,
  });
  return token;
};
module.exports = tokenFun;
