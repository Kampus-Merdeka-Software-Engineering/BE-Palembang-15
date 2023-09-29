import { Router } from "express";
import commentsController from "../controllers/videoCommentsController.js";

const commentsRouter = Router();

commentsRouter.get('/', commentsController.getAllComments);
commentsRouter.get('/:id', commentsController.getCommentsById);
commentsRouter.post('/', commentsController.createComments);
commentsRouter.get('/contents/:contentId', commentsController.getCommentsByContentId);

export default commentsRouter;
