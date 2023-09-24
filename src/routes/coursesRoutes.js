const express = require('express');
const coursesRouter = express.Router();
const coursesController = require('../controllers/coursesController');

coursesRouter.get('/', coursesController.getAllCourses);
coursesRouter.get('/:id', coursesController.getCoursesById);

module.exports = coursesRouter;
