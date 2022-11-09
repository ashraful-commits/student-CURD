const validation = require('../utility/validator');
const isEmailExistFunc = require('../utility/isEmailExist');
const isUsernameExistFunc = require('../utility/isUsernameExist');
const makehash = require('../utility/hash');
const register = require('../models/registerSchema');
const bycrypt = require('bcryptjs');
const tokenFun = require('../utility/token');
const session = require('express-session');
const cookie = require('cookie-parser');
const jwt = require('jsonwebtoken');

//============================all controller

const homePage = (req, res) => {
  res.render('index');
};
//================
const classPage = (req, res) => {
  res.render('class');
};
//==================
const contactPage = (req, res) => {
  res.render('contact');
};
//===================
const studentsPage = (req, res) => {
  res.render('students');
};
const studentProfile = (req, res) => {
  res.render('profile');
};
const studentProfileEdit = (req, res) => {
  res.render('edit');
};
//===============
const registrationPage = (req, res) => {
  res.render('registration');
};
//================
const loginPage = (req, res) => {
  res.render('login');
};

//===================================registraion Form Submit
const registraionFormSubmit = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      age,
      cell,
      email,
      location,
      gender,
      username,
      password,
      photo,
    } = req.body;
    if (
      !first_name ||
      !last_name ||
      !age ||
      !cell ||
      !email ||
      !location ||
      !gender ||
      !username ||
      !password
    ) {
      validation(
        'All fields are required',
        '/registration',
        req,
        res
      );
    } else {
      console.log(req.body);
      //==========================from validation
      const userData = await register.create({
        first_name,
        last_name,
        age,
        gender,
        cell,
        photo: req.file.filename,
        email,
        username,
        location,
        password: await makehash(password),
      });
      validation('Resigstation successfull', '/login', req, res);
    }
  } catch (error) {
    validation(error.message, '/registration', req, res);
  }
};
//=========================================> user login
const loginInUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    validation('All fields are required', '/login', req, res);
  } else {
    const loginUser = await register
      .find()
      .where('email')
      .equals(email);

    if (!loginUser[0]) {
      validation('User not found', '/login', req, res);
    } else {
      const usserPasword = bycrypt.compareSync(
        password,
        loginUser[0].password
      );
      if (!usserPasword) {
        validation('wrong password', '/login', req, res);
      } else {
        req.session.user = loginUser[0];
        const token = tokenFun({ id: loginUser[0]._id }, '3d');
        res.cookie('authToken', token);
        validation('login successful', '/students/profile', req, res);
      }
    }
  }
};
//=======================================log out user
const logoutInUser = (req, res) => {
  delete req.session.user;
  res.clearCookie('authToken');
  validation('logout successfully', '/login', req, res);
};

const editstudentProfile = async (req, res) => {
  const {
    first_name,
    last_name,
    age,
    cell,
    email,
    location,
    gender,
  } = req.body;

  const findId = await register.findByIdAndUpdate(
    { _id: req.params.id },
    { first_name, last_name, age, cell, email, location, gender }
  );
  validation('update successfull', '/students/edit', req, res);
};
//============================exports
module.exports = {
  homePage,
  classPage,
  contactPage,
  registrationPage,
  loginPage,
  studentsPage,
  registraionFormSubmit,
  loginInUser,
  logoutInUser,
  studentProfile,
  studentProfileEdit,
  editstudentProfile,
};
