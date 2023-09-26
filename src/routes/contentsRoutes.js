import { Router } from "express";
import contentsController from "../controllers/contentsController.js";

const contentsRouter = Router();

contentsRouter.get('/', contentsController.getAllContents);
contentsRouter.get('/:id', contentsController.getContentsById);

export default contentsRouter;
