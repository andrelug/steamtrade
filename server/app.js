import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import compression from 'compression';
import mini from 'node-minify';
import errorHandler from 'errorHandler';
import multer from 'multer';
import lusca from 'lusca';
import logger from 'morgan';
import path from 'path';
import stylus from 'stylus';
import nib from 'nib';
import connectmongo from 'connect-mongo';
import passport from 'passport';

const app = express();

mongoose.connect('mongodb://localhost:27017/database', () => {
	console.log('Connected to mongodb...');
});


const MongoStore = connectmongo(session);

// View engine setup
routes.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// middlewares
app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(stylus.middleware({
	src: path.join(__dirname, '../public/css'),
	dest: path.join(__dirname, '../public/css'),
	use: [nib()],
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

app.use(compression());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'appSessionsSecret',
  store: new MongoStore({
	url: 'mongodb://localhost:27017/databaseSession',
	cookie: {
		maxAge: 518400000
	},
	autoReconnect: true,
	clear_interval: 3600
  })
}));
app.use(lusca({
    csrf: true,
    csp: {
		policy: {
		'default-src': '\'self\'',
		'img-src': '*'
		}
	},
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    hsts: {maxAge: 31536000, includeSubDomains: true, preload: true},
    xssProtection: true,
    nosniff: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// api
import routes from './routes';
app.use('/api', routes);
// react
app.get('*', (req, res) => {
	res.render('index');
});

// Error handler
app.use(errorHandler());

// Define uploads
const upload = multer({ dest: path.join(__dirname, './../uploads') });

export default app;
