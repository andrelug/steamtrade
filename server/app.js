import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import mini from 'node-minify';
import errorHandler from 'errorHandler';
import multer from 'multer';
import path from 'path';
import stylus from 'stylus';
import nib from 'nib';
import connectmongo from 'connect-mongo';
import bootstrap from 'bootstrap-styl';
import passport from 'passport';
import Promise from 'bluebird';
import redis from 'redis';
import envir from './helpers/env';

Promise.promisifyAll(redis.RedisClient.prototype);
// create a new redis client and connect to our local redis instance
const client = redis.createClient(envir.redisdb.url);

// if an error occurs, print it to the console
client.on('error', function(err) {
    console.log("Error " + err);
});

Promise.promisifyAll(mongoose);

const app = express();

mongoose.connect(envir.mondb.url, () => {
	console.log('Connected to mongodb...');
});


const MongoStore = connectmongo(session);

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Stylus
function compile(str) {
  return stylus(str)
    .use(bootstrap());
}
app.use(stylus.middleware({
	src: path.join(__dirname, '../public/css'),
	dest: path.join(__dirname, '../public/css'),
	use: [nib()],
	compile: compile,
	import: ['nib'],
	force: true
}));
app.use(express.static(path.join(__dirname, '../public')));
mini.minify({
  compressor: 'clean-css',
  input: path.join(__dirname, '../public/css/main.css'),
  output: path.join(__dirname, '../public/css/bundle.css'),
  options: {
    advanced: true,
    aggressiveMerging: false
  },
  callback: function (err, min) {}
});

// Other middlewares
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'asadlfjadçfkjalkdjalfkdjalkfd',
  store: new MongoStore({
	url: envir.mondb.url2,
	cookie: {
		maxAge: 518400000
	},
	autoReconnect: true,
	clear_interval: 3600
  })
}));

// Auth
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
// api
import routes from './routes';

app.use('/api', routes);
// Especial wouldn't work at proper place
app.get('/api/steam/callback',
  passport.authenticate('steam', { failureRedirect: '/api' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/api');
  });
// react
app.get('*', (req, res) => {

	res.render('index', {user: req.user});
});

// Error handler
app.use(errorHandler());

// Define uploads
const upload = multer({ dest: path.join(__dirname, './../uploads') });

export {app, client};
