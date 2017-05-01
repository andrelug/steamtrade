import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import compression from 'compression';
import errorHandler from 'errorHandler';
import multer from 'multer';
import lusca from 'lusca';
import logger from 'morgan';
import path from 'path';
import stylus from 'stylus';
import nib from 'nib';
import connectmongo from 'connect-mongo';
import passport from 'passport';

// Routes
import routes from './routes';

mongoose.connect('mongodb://localhost:27017/database', () => {
	console.log('Connected to mongodb...');
});

const app = express();
const MongoStore = connectmongo(session);

// View engine setup
app.set('views', __dirname+'server/views/');
app.set('view engine', 'pug');

// middlewares
app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(express.static(path.join(__dirname, '../public')));
app.use(stylus.middleware({
	src: path.join(__dirname, '../public'),
	use: [nib()],
	import: ['nib']
}));
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

// Error handler
app.use(errorHandler());

// Define uploads
const upload = multer({ dest: path.join(__dirname, './../uploads') });

export default app;
