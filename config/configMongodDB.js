const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
//========================================create connection

const MongoDBConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB);
    console.log(`Succesfully Connected MONGODB`.bgGreen.blue);
  } catch (error) {
    console.log(`${error.massage}`.bgRed);
  }
};

//=====================================export
module.exports = MongoDBConnection;
