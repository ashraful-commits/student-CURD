const { render } = require('ejs');
const express = require('express');
const student = require('../models/studentModel');

//=============================================================> homepage
const homePage = (req, res) => {
  res.render('index');
};
//==============================================================> classpage
const classPage = (req, res) => {
  res.render('class');
};
//===============================================================> contactpage
const contactPage = (req, res) => {
  {
    res.render('contact');
  }
};
//==================================================================> students
const studentsPage = async (req, res) => {
  try {
    const studentdata = await student.find();
    res.render('students', {
      studentdata,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const studentForm = (req, res) => {
  res.render('Studentform');
};
//================================================> post student form
const postForm = async (req, res) => {
  const {
    name,
    age,
    stu_class,
    gender,
    cell,
    email,
    location,
    photo,
  } = req.body;
  try {
    await student.create({
      name: name,
      age: age,
      gender: gender,
      class: stu_class,
      cell: cell,
      email: email,
      location: location,
      photo: req.file.filename,
    });
    res.redirect('/students');
  } catch (error) {
    console.log(error.message);
  }
};

//==============================================> delete form data
const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    await student.findByIdAndDelete(id);
    res.redirect('/students');
  } catch (error) {
    console.log(error.message);
  }
};

//================================================> updata student
const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const udateStuData = await student.findById(id);
    res.render('edit', {
      udateStuData,
    });
  } catch (error) {
    console.log(error.message);
  }
};
//===============================================> update post form
const postUpdateForm = async (req, res) => {
  const {
    name,
    age,
    stu_class,
    cell,
    gender,
    email,
    location,
    photo,
  } = req.body;
  const id = req.params.id;
  console.log(id);
  try {
    await student.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        age: age,
        gender: gender,
        class: stu_class,
        cell: cell,
        email: email,
        location: location,
        // photo: req.file.filename,
      }
    );
    res.redirect('/students');
  } catch (error) {
    console.log(error.message);
  }
};
//===================================================export
module.exports = {
  homePage,
  classPage,
  contactPage,
  studentsPage,
  studentForm,
  postForm,
  deleteStudent,
  updateStudent,
  postUpdateForm,
};
