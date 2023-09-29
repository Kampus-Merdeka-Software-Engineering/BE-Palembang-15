import express from "express";
import { getById, getAll, getByCourseId} from "../services/standarMateriService.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

 const getAllStandarMateri = async (req, res, next) => {
  try{
    const standarMateriList = await getAll();
  
    if(!standarMateriList === null || standarMateriList.length === 0){
      res.status(404);
      res.json({
          message: "Data not found"
      });
      return;
    }

    res.json({
      data: standarMateriList,
      message: "Data successfully retrieved",
    });
  } catch (e){
    next(e);
  }
 };

  /**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

const getStandarMateriById = async(req, res, next) => {
  try{
    const standarMateri = await getById(req.params.id);

    if(!standarMateri){
      res.status(404);
      res.json({
          message: "Data not found"
      });
      return;
    }

    res.json({
      data: standarMateri,
      message: "Data successfully retrieved",
    });
  } catch (e){
    next(e);
  }
};

const getStandarMateriByCourseId = async(req, res, next) => {
  try{
      const standar_materi = await getByCourseId(req.params.courseId);

      if(!standar_materi === null || standar_materi.length === 0){
          res.status(404);
          res.json({
              message: "Data not found"
          });
          return;
      }

      res.json({
          data: standar_materi,
          message: "Data successfully retrieved",
      });
  } catch (e){
      next(e);
  }
}; 

export default {
    getAllStandarMateri,
    getStandarMateriById,
    getStandarMateriByCourseId,
};