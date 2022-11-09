const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const router = require('./routes/pageRouters');
const expressLouts = require('express-ejs-layouts');
const session = require('express-session');
const sessionMid = require('./middlewares/sessionMiddlewares');
const cookePaser = require('cookie-parser');
dotenv.config();
//====================================================init
const port = process.env.PORT || 3000;

const MongoDBConnection = require('./config/configMongodDB');

//====================================================create app>
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//============================================================use express session
//====================================================use app >
app.use(
  session({
    secret: 'hello',
    saveUninitialized: true,
    resave: false,
  })
);
//======================================================== session middlewares
app.use(sessionMid);
//============================================== cookie paser
app.use(cookePaser());
//===================================================ejs >
app.set('view engine', 'ejs');
app.use(expressLouts);
app.set('layout', 'layouts/app');
//===================================================router
app.use(router);
//===================================================public folder static>
app.use(express.static('public'));
//=============================user error hendeler

app.listen(port, () => {
  MongoDBConnection();
  console.log(`server is running port ${port}`.bgMagenta);
});
