const mongoose = require('mongoose');

//======================================student schema

const studendModel = mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    photo: {
      type: String,
    },
    class: {
      type: String,
    },
    email: {
      type: String,
    },
    cell: {
      type: Number,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('student', studendModel);
