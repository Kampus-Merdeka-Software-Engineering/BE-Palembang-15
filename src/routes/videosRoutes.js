const express = require('express');
const videosRouter = express.Router();
const videosController = require('../controllers/videosController');

videosRouter.get('/', videosController.getAllVideos);
videosRouter.get('/:id', videosController.getVideosById);

module.exports = videosRouter;
