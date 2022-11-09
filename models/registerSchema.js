const mongoose = require('mongoose');

//======================================student schema

const registerSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    cell: {
      type: Number,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
    },
    accessToken: {
      type: String,
      trim: true,
    },
    gallary: {
      type: Array,
    },
    isAdmin: {
      type: String,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('register', registerSchema);
