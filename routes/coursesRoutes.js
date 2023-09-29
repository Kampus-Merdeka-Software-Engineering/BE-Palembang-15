import { Router } from "express";
import coursesController from "../controllers/coursesController.js";

const coursesRouter = Router();

coursesRouter.get('/popular', coursesController.getPopularCourses);
coursesRouter.get('/:id', coursesController.getCoursesById);
coursesRouter.get('/', coursesController.getAllCourses);

export default coursesRouter;
