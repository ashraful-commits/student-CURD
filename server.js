const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
//======================================================router
const router = require('./routes/pageRouters');
//====================================================express ejs layour>
const expressLouts = require('express-ejs-layouts');
//===================================================> model import

//====================================================config
dotenv.config();

//====================================================init
const port = process.env.PORT || 3000;

const { json } = require('body-parser');
const MongoDBConnection = require('./config/configMongodDB');
//====================================================create app>
const app = express();
//====================================================use app >
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//===================================================ejs >
app.set('view engine', 'ejs');
app.use(expressLouts);
app.set('layout', 'layouts/app');
//===================================================router
app.use(router);
//===================================================public folder static>
app.use(express.static('public'));

app.listen(port, () => {
  MongoDBConnection();
  console.log(`server is running port ${port}`.bgMagenta);
});
