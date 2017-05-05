import express from 'express';
import path from 'path';
import Promise from 'bluebird';
import redis from 'redis';
Promise.promisifyAll(redis.RedisClient.prototype);
// create a new redis client and connect to our local redis instance
const client = redis.createClient();

// if an error occurs, print it to the console
client.on('error', function(err) {
    console.log("Error " + err);
});

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
routes.get('/steam', loginController.get);
routes.get('/steam/logout', loginController.logout);

// Cache index
routes.get('/redis', (req, res) => {
    client.getAsync('http://steamcommunity.com/openid/id/76561198024097357').then((data) => {
        res.json(data);
    });
});

export default routes;
