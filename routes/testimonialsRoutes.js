import { Router } from "express";
import testimonialsController from "../controllers/testimonialsController.js";

const testimonialsRouter = Router();

testimonialsRouter.get('/', testimonialsController.getAllTestimonials);
testimonialsRouter.get('/:id', testimonialsController.getTestimonialsById);
testimonialsRouter.post('/', testimonialsController.createTestimonials);

export default testimonialsRouter;
