import express from 'express';
import path from 'path';
import Promise from 'bluebird';
import redis from 'redis';
import { client } from './app';

// Controllers Imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';
import itemController from './controllers/itemController';
import loginController from './controllers/loginController';

const routes = express();

// Basic routes
routes.get('/', basicController.get);

// User routes
routes.get('/items', userController.getAll);

// Login routes
routes.get('/steam', loginController.get);
routes.get('/steam/logout', loginController.logout);

// Cache index
routes.get('/redis', (req, res) => {
    client.getAsync('http://steamcommunity.com/openid/id/76561198024097357').then((data) => {
        res.json(data);
    });
});

export default routes;
