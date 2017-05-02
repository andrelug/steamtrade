import express from 'express';
import path from 'path';

// Controllers Imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import itemController from './controllers/itemController';

const routes = express();

// Basic Routes
routes.get('/', basicController.get);

// User routes
routes.post('/signup', userController.post);

// Post routes
routes.post('/item', itemController.post);
routes.get('/items', itemController.getAll);

export default routes;
