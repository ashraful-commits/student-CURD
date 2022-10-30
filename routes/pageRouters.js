const express = require('express');
const {
  homePage,
  classPage,
  contactPage,
  studentsPage,
  studentForm,
  postForm,
  deleteStudent,
  updateStudent,
  postUpdateForm,
} = require('../controllers/pageControllers');
const photoMulter = require('../middlewares/photoMulter');

//=======================================crarte router
const router = express.Router();

//======================================use router
router.get('/', homePage);
router.get('/class', classPage);
router.get('/contact', contactPage);
router.get('/students', studentsPage);
router.get('/students/Studentform', studentForm);
router.post('/students/Studentform', photoMulter, postForm);
router.get('/students/update/:id', updateStudent);
router.post('/students/update/:id', photoMulter, postUpdateForm);
router.get('/students/delete/:id', deleteStudent);
//======================================export router
module.exports = router;
