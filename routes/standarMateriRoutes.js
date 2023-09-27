import { Router } from "express";
import standarMateriController from "../controllers/standarMateriController.js";

const standarMateriRouter = Router();

standarMateriRouter.get('/', standarMateriController.getAllStandarMateri);
standarMateriRouter.get('/:id', standarMateriController.getStandarMateriById);

export default standarMateriRouter;
