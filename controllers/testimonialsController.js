import express from "express";
import { create, getById, getAll} from "../services/testimonialsService.js";
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getAllTestimonials = async (req, res, next) => {
  try{
    const TestimonialList = await getAll();

    if(!TestimonialList === null || TestimonialList.length === 0){
      res.status(404);
      res.json({
          message: "Data not found"
      });
      return;
    }

    res.json({
      data: TestimonialList,
      message: "Data successfully retrieved",
    });
  } catch (e){
    next(e);
  }
};
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getTestimonialsById = async(req, res, next) => {
  try{
    const testimonials = await getById(req.params.id);

    if(!testimonials){
      res.status(404);
      res.json({
          message: "Data not found"
      });
      return;
    }

    res.json({
      data: testimonials,
      message: "Data successfully retrieved",
    });
  } catch (e){
    next(e);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createTestimonials = async (req, res, next) => {
  try {
    const { id, nama, jabatan, perusahaan, email, layanan, testimoni } = req.body;
    await create(nama, jabatan, perusahaan, email, layanan, testimoni)
    res.json({
      message: "Data created successfully",
    });
  } catch (e){
    next(e);
  }
};


export default {
    getAllTestimonials,
    createTestimonials,
    getTestimonialsById
};