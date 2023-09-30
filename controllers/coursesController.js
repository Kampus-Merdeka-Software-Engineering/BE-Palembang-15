import express from "express";
import { getById, getAll, getMostPopular} from "../services/coursesService.js";


/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

const getAllCourses = async (req, res, next) => {
  try{
    const CoursesList = await getAll();

    if(!CoursesList === null || CoursesList.length === 0){
      res.status(404);
      res.json({
          message: "Data not found"
      });
      return;
    }

    res.json({
      data: CoursesList,
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

 const getCoursesById = async(req, res, next) => {
  try{
    const courses = await getById(req.params.id);

    if(!courses){
      res.status(404);
      res.json({
          message: "Data not found"
      });
      return;
    }

    res.json({
      data: courses,
      message: "Data successfully retrieved",
    });
  } catch (e){
    next(e);
  }
 };

 const getPopularCourses = async (req, res) => {
  try {
      const popularCourses = await getMostPopular(4);
      if(!popularCourses){
        res.status(404);
        res.json({
            message: "Data not found"
        });
        return;
      }

      res.json({
        data: popularCourses,
        message: "Data successfully retrieved",
      });
    } catch (e){
      next(e);
    }
  };


export default {
    getAllCourses,
    getCoursesById,
    getPopularCourses,
};
  