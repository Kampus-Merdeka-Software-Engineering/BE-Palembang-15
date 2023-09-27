import express from "express";
import { getById, getAll} from "../services/standarMateriService.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

 const getAllStandarMateri = async (req, res) => {
    const standarMateriList = await getAll();
  
    res.json({
      data: standarMateriList,
      message: "Data successfully retrieved",
    })
  };

  /**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

const getStandarMateriById = async(req, res) => {

    const standarMateri = await getById(req.params.id);
    res.json({
      data: standarMateri,
      message: "Data successfully retrieved",
    })
};

export default {
    getAllStandarMateri,
    getStandarMateriById,
};