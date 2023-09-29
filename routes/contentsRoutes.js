import { Router } from "express";
import contentsController from "../controllers/contentsController.js";

const contentsRouter = Router();

contentsRouter.get('/:id', contentsController.getContentsById);
contentsRouter.get('/courses/:courseId', contentsController.getContentsByCourseId);
contentsRouter.get("/:courseId/:episode", contentsController.getContentByEpisode);
contentsRouter.get('/', contentsController.getAllContents);

export default contentsRouter;
