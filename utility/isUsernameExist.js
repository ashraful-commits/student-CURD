const register = require('../models/registerSchema');
const mongoose = require('mongoose');
const isUsernameExistFunc = async (username) => {
  const usernameFunc = await register
    .find()
    .where('username')
    .equals(username);
  return usernameFunc;
};

module.exports = isUsernameExistFunc;
