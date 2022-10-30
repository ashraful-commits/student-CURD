const mongoose = require('mongoose');

//========================================create connection

const MongoDBConnection = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://Ashraful:ashraful019@mern.sho5qfe.mongodb.net/student'
    );
    console.log(`Succesfully Connected MONGODB`.bgGreen.blue);
  } catch (error) {
    console.log(`${error.massage}`.bgRed);
  }
};

//=====================================export
module.exports = MongoDBConnection;
