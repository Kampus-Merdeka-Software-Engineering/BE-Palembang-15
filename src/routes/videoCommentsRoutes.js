import { Router } from "express";
import commentsController from "../controllers/videoCommentsController.js";

const commentsRouter = Router();

commentsRouter.get('/', commentsController.getAllComments);
commentsRouter.get('/:id', commentsController.getCommentsById);
commentsRouter.post('/', commentsController.createComments);

export default commentsRouter;
