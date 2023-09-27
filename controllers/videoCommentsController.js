import express from "express";
import { create, getById, getAll} from "../services/videoCommentsService.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

 const getAllComments = async (req, res) => {
    const commentsList = await getAll();
  
    res.json({
      data: commentsList,
      message: "Data successfully retrieved",
    })
  };

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

 const getCommentsById = async(req, res) => {

    const comments = await getById(req.params.id);
    res.json({
      data: comments,
      message: "Data successfully retrieved",
    })
  };

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
 const createComments = async (req, res) => {
    const { nama, email, jabatan, komentar } = req.body;
    await create(nama, email, jabatan, komentar)
    res.json({
      message: "Data created successfully",
    })
  };


export default {
    getAllComments,
    getCommentsById,
    createComments
};