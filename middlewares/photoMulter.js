const multer = require('multer');
const path = require('path');
const fs = require('fs');

//=====================================create diskstorage

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
//===================================================>crate multer

const photoMulter = multer({
  storage: Storage,
}).single('photo');

module.exports = photoMulter;
