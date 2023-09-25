const express = require('express');
const contentsRouter = express.Router();
const contentsController = require('../controllers/contentsController');

contentsRouter.get('/', contentsController.getAllContents);
contentsRouter.get('/:id', contentsController.getContentsById);

module.exports = contentsRouter;
