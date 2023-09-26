import { Router } from "express";
import coursesController from "../controllers/coursesController.js";

const coursesRouter = Router();

coursesRouter.get('/', coursesController.getAllCourses);
coursesRouter.get('/:id', coursesController.getCoursesById);

export default coursesRouter;
