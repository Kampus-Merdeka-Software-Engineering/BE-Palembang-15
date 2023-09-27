import express from "express";
import { create, getById, getAll} from "../services/testimonialsService.js";
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

const getAllTestimonials = async (req, res) => {
  const TestimonialList = await getAll();

  res.json({
    data: TestimonialList,
    message: "Data successfully retrieved",
  })
};
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

const getTestimonialsById = async(req, res) => {

  const testimonials = await getById(req.params.id);
  res.json({
    data: testimonials,
    message: "Data successfully retrieved",
  })
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
const createTestimonials = async (req, res) => {
  const { id, nama, jabatan, perusahaan, email, layanan, testimoni } = req.body;
  await create(nama, jabatan, perusahaan, email, layanan, testimoni)
  res.json({
    message: "Data created successfully",
  })
};


export default {
    getAllTestimonials,
    createTestimonials,
    getTestimonialsById
};