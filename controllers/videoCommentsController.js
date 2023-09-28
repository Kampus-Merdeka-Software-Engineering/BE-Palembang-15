import express from "express";
import { create, getById, getAll} from "../services/videoCommentsService.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

 const getAllComments = async (req, res, next) => {
  try{
    const commentsList = await getAll();

    if(!commentsList === null || commentsList.length === 0){
      res.status(404);
      res.json({
          message: "Data not found"
      });
      return;
    }
  
    res.json({
      data: commentsList,
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

 const getCommentsById = async(req, res, next) => {
  try{
    const comments = await getById(req.params.id);

    if(!comments){
      res.status(404);
      res.json({
          message: "Data not found"
      });
      return;
    }
    
    res.json({
      data: comments,
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
 const createComments = async (req, res, next) => {
  try{
    const { nama, email, jabatan, komentar, ContentId} = req.body;
    await create(nama, email, jabatan, komentar, ContentId)
    res.json({
      message: "Data created successfully",
    });
  } catch(e){
    next(e);
  }
 };


export default {
    getAllComments,
    getCommentsById,
    createComments
};