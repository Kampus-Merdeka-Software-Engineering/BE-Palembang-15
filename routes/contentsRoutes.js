import { Router } from "express";
import contentsController from "../controllers/contentsController.js";

const contentsRouter = Router();

contentsRouter.get('/', contentsController.getAllContents);
contentsRouter.get('/:id', contentsController.getContentsById);
contentsRouter.get('/courses/:courseId', contentsController.getContentsByCourseId);

export default contentsRouter;
