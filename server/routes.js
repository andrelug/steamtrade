import express from 'express';
import path from 'path';

// Controllers Imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import itemController from './controllers/itemController';
import loginController from './controllers/loginController';

const routes = express();

// Basic routes
routes.get('/', basicController.get);

// User routes
routes.post('/signup', userController.post);

// Post routes
routes.post('/item', itemController.post);
routes.get('/items', itemController.getAll);

// Login routes
routes.get('/login', loginController.get);

export default routes;
