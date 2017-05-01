import express from 'express';
import path from 'path';

// Controllers Imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';

const routes = express();

// Basic Routes
routes.get('/', basicController.get);

// User routes
routes.post('/signup', userController.post);

// Post routes
routes.post('/post', postController.post);
routes.get('/posts', postController.getAll);

export default routes;
