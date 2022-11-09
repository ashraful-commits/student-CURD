const bcrypt = require('bcryptjs');
const makehash = (password) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = makehash;
