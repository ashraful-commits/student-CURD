const register = require('../models/registerSchema');
const mongoose = require('mongoose');
const isEmailExistFunc = async (email) => {
  const isemail = await register.find().where('email').equals(email);
  return isemail;
};
module.exports = isEmailExistFunc;
