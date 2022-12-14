const photoMulter = require('../middlewares/photoMulter');
const express = require('express');
const {
  homePage,
  classPage,
  contactPage,
  loginPage,
  registrationPage,
  studentsPage,
  registraionFormSubmit,
  loginInUser,
  logoutInUser,
  studentProfile,
  studentProfileEdit,
  editstudentProfile,
  changePassword,
  updatePassword,
  profilePhoto,
  changeProfilePhoto,
} = require('../controllers/pageControllers');
const loginUserRedicet = require('../middlewares/userLoginRedirect');
const authMiddlewares = require('../middlewares/authMiddlewares');

//================================ ccreate ruter
const router = express.Router();
//================================================user router
router.get('/', loginUserRedicet, homePage);
router.get('/class', loginUserRedicet, classPage);
router.get('/contact', loginUserRedicet, contactPage);
router.get('/students', loginUserRedicet, studentsPage);
router.get('/students/profile', loginUserRedicet, studentProfile);
router.get('/students/edit', studentProfileEdit);
router.get('/students/password', changePassword);
router.get('/students/profilephoto/', profilePhoto);
router.post(
  '/students/profilephoto/:id',
  photoMulter,
  changeProfilePhoto
);
router.post('/students/password/:id', updatePassword);
router.post('/students/edit/:id', editstudentProfile);
router.get('/registration', authMiddlewares, registrationPage);
router.post('/registration', photoMulter, registraionFormSubmit);
router.get('/login', authMiddlewares, loginPage);
router.post('/login', loginInUser);
router.get('/logout', logoutInUser);
//=======================================export rouer
module.exports = router;
