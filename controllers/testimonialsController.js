import express from "express";
import sequelize from "../config/sequelize.js";
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

const getAllTestimonials = async (req, res) => {
  const TestimonialList = await sequelize.models.Testimonials.findAll();

  res.json({
    data: TestimonialList,
    message: "Data successfully retrieved",
  })
};

const getTestimonialsById = (req, res) => {

};

const createTestimonials = (req, res) => {
  const { id, nama, jabatan, perusahaan, email, layanan, testimoni } = req.body;
  sequelize.models.Testimonials.create({
    id,
    nama, 
    jabatan, 
    perusahaan, 
    email, 
    layanan, 
    testimoni,
  })

  res.json({
    message: "Data created successfully",
  })
};


export default {
    getAllTestimonials,
    createTestimonials,
    getTestimonialsById
};