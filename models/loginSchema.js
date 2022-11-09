const { default: mongoose } = require('mongoose');

const logoinSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});
module.exports = mongoose.model('login', logoinSchema);
