import express from "express";
import { getById, getAll, getByCourseId, getByEpisode} from "../services/contentsService.js";


/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

 const getAllContents = async (req, res, next) => {
    try{
        const ContentsList = await getAll();
    
        if(!ContentsList === null || ContentsList.length === 0){
            res.status(404);
            res.json({
                message: "Data not found"
            });
            return;
        }

        res.json({
        data: ContentsList,
        message: "Data successfully retrieved",
        });
    } catch(e){
        next(e);
    }  
 };
  
/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

 const getContentsById = async(req, res, next) => {
    try{
        const contents = await getById(req.params.id);

        if(!contents){
            res.status(404);
            res.json({
                message: "Data not found"
            });
            return;
        }

        res.json({
            data: contents,
            message: "Data successfully retrieved",
        });
    } catch (e){
        next(e);
    }
 };

 const getContentsByCourseId = async(req, res, next) => {
    try{
        const contentsByCourseId = await getByCourseId(req.params.courseId);

        if(!contentsByCourseId){
            res.status(404);
            res.json({
                message: "Data not found"
            });
            return;
        }

        res.json({
            data: contentsByCourseId,
            message: "Data successfully retrieved",
        });
    } catch (e){
        next(e);
    }
 }; 
 
 const getContentByEpisode = async (req, res, next) => {
    try{
      const content = await getByEpisode(req.params.courseId, req.params.episode);
  
      if(!content === null || content.length === 0){
        res.status(404);
        res.json({
            message: "Data not found for the specified episode"
        });
        return;
      }
  
      res.json({
        data: content,
        message: "Content successfully retrieved for the specified episode.",
      });
    } catch (e){
      next(e);
    }
  };

  
export default {
    getAllContents,
    getContentsById,
    getContentsByCourseId,
    getContentByEpisode,
};
  