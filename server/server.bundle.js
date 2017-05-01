/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _User = __webpack_require__(10);

var _User2 = _interopRequireDefault(_User);

var _Post = __webpack_require__(9);

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	User: _User2.default,
	Post: _Post2.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(14);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = __webpack_require__(18);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _compression = __webpack_require__(15);

var _compression2 = _interopRequireDefault(_compression);

var _errorHandler = __webpack_require__(12);

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _multer = __webpack_require__(22);

var _multer2 = _interopRequireDefault(_multer);

var _lusca = __webpack_require__(20);

var _lusca2 = _interopRequireDefault(_lusca);

var _morgan = __webpack_require__(21);

var _morgan2 = _interopRequireDefault(_morgan);

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _stylus = __webpack_require__(25);

var _stylus2 = _interopRequireDefault(_stylus);

var _nib = __webpack_require__(23);

var _nib2 = _interopRequireDefault(_nib);

var _connectMongo = __webpack_require__(16);

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _passport = __webpack_require__(24);

var _passport2 = _interopRequireDefault(_passport);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost:27017/database', function () {
	console.log('Connected to mongodb...');
});

// Routes


var app = (0, _express2.default)();
var MongoStore = (0, _connectMongo2.default)(_expressSession2.default);

// View engine setup

app.set('view engine', 'pug');

// middlewares
app.use((0, _morgan2.default)('dev', {
	skip: function skip() {
		return app.get('env') === 'test';
	}
}));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use('/', _routes2.default);
app.use(_stylus2.default.middleware({
	src: _path2.default.join(__dirname, '../public'),
	dest: _path2.default.join(__dirname, '../public'),
	use: [(0, _nib2.default)()],
	import: ['nib']
}));
app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));
app.use((0, _compression2.default)());
app.use((0, _expressSession2.default)({
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
app.use((0, _lusca2.default)({
	csrf: true,
	csp: {
		policy: {
			'default-src': '\'self\'',
			'img-src': '*'
		}
	},
	xframe: 'SAMEORIGIN',
	p3p: 'ABCDEF',
	hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
	xssProtection: true,
	nosniff: true
}));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

// Error handler
app.use((0, _errorHandler2.default)());

// Define uploads
var upload = (0, _multer2.default)({ dest: _path2.default.join(__dirname, './../uploads') });

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var basicController = {};

basicController.get = function (req, res) {
	res.render('index');
};

exports.default = basicController;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postController = {};

postController.post = function (req, res) {
	var _req$body = req.body,
	    title = _req$body.title,
	    text = _req$body.text,
	    link = _req$body.link,
	    userId = _req$body.userId;

	// Validation

	var post = new _index2.default.Post({
		title: title,
		text: text,
		link: link,
		_creator: userId
	});

	post.save().then(function (newPost) {
		res.status(200).json({
			success: true,
			data: newPost
		});
	}).catch(function (err) {
		res.status(500).json({
			message: err
		});
	});
};

postController.getAll = function (req, res) {
	_index2.default.Post.find({}).populate({
		path: '_creator',
		select: 'username createdAt -_id',
		match: { 'isDeleted': false }
	}).then(function (posts) {
		res.status(200).json({
			success: true,
			data: posts
		});
	}).catch(function (err) {
		res.status(500).json({
			message: err
		});
	});
};

exports.default = postController;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userController = {};

userController.post = function (req, res) {
	var _req$body = req.body,
	    username = _req$body.username,
	    password = _req$body.password;

	// Validação

	var user = new _index2.default.User({
		username: username,
		password: password
	});

	user.save().then(function (newUser) {
		res.status(200).json({
			success: true,
			data: newUser
		});
	}).catch(function (err) {
		res.status(500).json({
			message: err
		});
	});
};

exports.default = userController;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.listen(3000, function () {
	console.log('Running on port 3000...');
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var postSchema = new Schema({
	title: { type: String, required: true },
	link: String,
	text: String,
	isDeleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	_creator: { type: Schema.ObjectId, ref: 'User' }
});

// encryption here

var Post = _mongoose2.default.model('Post', postSchema);
exports.default = Post;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var userSchema = new Schema({
	username: {
		type: String,
		required: true,
		minLength: [5, 'Nome de usuário precisa ter 5 caracteres ou mais.']
	},
	password: {
		type: String,
		required: true,
		minLength: [8, 'A senha precisa ter 8 caracteres ou mais.']
	},
	isDeleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now }
});

// encryption here

var User = _mongoose2.default.model('User', userSchema);
exports.default = User;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(1);

var _path2 = _interopRequireDefault(_path);

var _basicController = __webpack_require__(5);

var _basicController2 = _interopRequireDefault(_basicController);

var _userController = __webpack_require__(7);

var _userController2 = _interopRequireDefault(_userController);

var _postController = __webpack_require__(6);

var _postController2 = _interopRequireDefault(_postController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express2.default)();

// Controllers Imports


routes.set('views', _path2.default.join(__dirname, 'views'));

// Basic Routes
routes.get('/', _basicController2.default.get);

// User routes
routes.post('/signup', _userController2.default.post);

// Post routes
routes.post('/post', _postController2.default.post);
routes.get('/posts', _postController2.default.getAll);

exports.default = routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/*!
 * errorhandler
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var accepts = __webpack_require__(13)
var escapeHtml = __webpack_require__(17)
var fs = __webpack_require__(19)
var path = __webpack_require__(1)
var util = __webpack_require__(26)

/**
 * Module variables.
 * @private
 */

var DOUBLE_SPACE_REGEXP = /\x20{2}/g
var NEW_LINE_REGEXP = /\n/g
var STYLESHEET = fs.readFileSync(path.join(__dirname, '/public/style.css'), 'utf8')
var TEMPLATE = fs.readFileSync(path.join(__dirname, '/public/error.html'), 'utf8')
var inspect = util.inspect
var toString = Object.prototype.toString

/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function (fn) { process.nextTick(fn.bind.apply(fn, arguments)) }

/**
 * Error handler:
 *
 * Development error handler, providing stack traces
 * and error message responses for requests accepting text, html,
 * or json.
 *
 * Text:
 *
 *   By default, and when _text/plain_ is accepted a simple stack trace
 *   or error message will be returned.
 *
 * JSON:
 *
 *   When _application/json_ is accepted, connect will respond with
 *   an object in the form of `{ "error": error }`.
 *
 * HTML:
 *
 *   When accepted connect will output a nice html stack trace.
 *
 * @return {Function}
 * @api public
 */

exports = module.exports = function errorHandler (options) {
  // get environment
  var env = process.env.NODE_ENV || 'development'

  // get options
  var opts = options || {}

  // get log option
  var log = opts.log === undefined
    ? env !== 'test'
    : opts.log

  if (typeof log !== 'function' && typeof log !== 'boolean') {
    throw new TypeError('option log must be function or boolean')
  }

  // default logging using console.error
  if (log === true) {
    log = logerror
  }

  return function errorHandler (err, req, res, next) {
    // respect err.statusCode
    if (err.statusCode) {
      res.statusCode = err.statusCode
    }

    // respect err.status
    if (err.status) {
      res.statusCode = err.status
    }

    // default status code to 500
    if (res.statusCode < 400) {
      res.statusCode = 500
    }

    // log the error
    var str = stringify(err)
    if (log) {
      defer(log, err, str, req, res)
    }

    // cannot actually respond
    if (res._header) {
      return req.socket.destroy()
    }

    // negotiate
    var accept = accepts(req)
    var type = accept.type('html', 'json', 'text')

    // Security header for content sniffing
    res.setHeader('X-Content-Type-Options', 'nosniff')

    // html
    if (type === 'html') {
      var isInspect = !err.stack && String(err) === toString.call(err)
      var errorHtml = !isInspect
        ? escapeHtmlBlock(str.split('\n', 1)[0] || 'Error')
        : 'Error'
      var stack = !isInspect
        ? String(str).split('\n').slice(1)
        : [str]
      var stackHtml = stack
        .map(function (v) { return '<li>' + escapeHtmlBlock(v) + '</li>' })
        .join('')
      var body = TEMPLATE
        .replace('{style}', STYLESHEET)
        .replace('{stack}', stackHtml)
        .replace('{title}', escapeHtml(exports.title))
        .replace('{statusCode}', res.statusCode)
        .replace(/\{error\}/g, errorHtml)
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(body)
    // json
    } else if (type === 'json') {
      var error = { message: err.message, stack: err.stack }
      for (var prop in err) error[prop] = err[prop]
      var json = JSON.stringify({ error: error }, null, 2)
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(json)
    // plain text
    } else {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end(str)
    }
  }
}

/**
 * Template title, framework authors may override this value.
 */

exports.title = 'Connect'

/**
 * Escape a block of HTML, preserving whitespace.
 * @api private
 */

function escapeHtmlBlock (str) {
  return escapeHtml(str)
  .replace(DOUBLE_SPACE_REGEXP, ' &nbsp;')
  .replace(NEW_LINE_REGEXP, '<br>')
}

/**
 * Stringify a value.
 * @api private
 */

function stringify (val) {
  var stack = val.stack

  if (stack) {
    return String(stack)
  }

  var str = String(val)

  return str === toString.call(val)
    ? inspect(val)
    : str
}

/**
 * Log error to console.
 * @api private
 */

function logerror (err, str) {
  console.error(str || err.stack)
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("accepts");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("escape-html");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("lusca");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("nib");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("stylus");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2I2MTEyNTAzMGEyNzFjOWQ0YzkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL21vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvYmFzaWNDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9jb250cm9sbGVycy9wb3N0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvY29udHJvbGxlcnMvdXNlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9tb2RlbHMvUG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvbW9kZWxzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2Vycm9ySGFuZGxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhY2NlcHRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3QtbW9uZ29cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlc2NhcGUtaHRtbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibHVzY2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtdWx0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuaWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWx1c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6WyJVc2VyIiwiUG9zdCIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiYXBwIiwiTW9uZ29TdG9yZSIsInNldCIsInVzZSIsInNraXAiLCJnZXQiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwibWlkZGxld2FyZSIsInNyYyIsImpvaW4iLCJfX2Rpcm5hbWUiLCJkZXN0IiwiaW1wb3J0Iiwic3RhdGljIiwicmVzYXZlIiwic2F2ZVVuaW5pdGlhbGl6ZWQiLCJzZWNyZXQiLCJzdG9yZSIsInVybCIsImNvb2tpZSIsIm1heEFnZSIsImF1dG9SZWNvbm5lY3QiLCJjbGVhcl9pbnRlcnZhbCIsImNzcmYiLCJjc3AiLCJwb2xpY3kiLCJ4ZnJhbWUiLCJwM3AiLCJoc3RzIiwiaW5jbHVkZVN1YkRvbWFpbnMiLCJwcmVsb2FkIiwieHNzUHJvdGVjdGlvbiIsIm5vc25pZmYiLCJpbml0aWFsaXplIiwic2Vzc2lvbiIsInVwbG9hZCIsImJhc2ljQ29udHJvbGxlciIsInJlcSIsInJlcyIsInJlbmRlciIsInBvc3RDb250cm9sbGVyIiwicG9zdCIsImJvZHkiLCJ0aXRsZSIsInRleHQiLCJsaW5rIiwidXNlcklkIiwiX2NyZWF0b3IiLCJzYXZlIiwidGhlbiIsIm5ld1Bvc3QiLCJzdGF0dXMiLCJzdWNjZXNzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsImdldEFsbCIsImZpbmQiLCJwb3B1bGF0ZSIsInBhdGgiLCJzZWxlY3QiLCJtYXRjaCIsInBvc3RzIiwidXNlckNvbnRyb2xsZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsIm5ld1VzZXIiLCJsaXN0ZW4iLCJTY2hlbWEiLCJwb3N0U2NoZW1hIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiaXNEZWxldGVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwiT2JqZWN0SWQiLCJyZWYiLCJtb2RlbCIsInVzZXJTY2hlbWEiLCJtaW5MZW5ndGgiLCJyb3V0ZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxxQzs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDZEEscUJBRGM7QUFFZEM7QUFGYyxDOzs7Ozs7QUNIZixvQzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7O0FBRUEsbUJBQVNDLE9BQVQsQ0FBaUIsb0NBQWpCLEVBQXVELFlBQU07QUFDNURDLFNBQVFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBLENBRkQ7O0FBSEE7OztBQU9BLElBQU1DLE1BQU0sd0JBQVo7QUFDQSxJQUFNQyxhQUFhLHFEQUFuQjs7QUFFQTs7QUFFQUQsSUFBSUUsR0FB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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDck1BLG9DOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLCtCOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxnQzs7Ozs7O0FDQUEscUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYjYxMTI1MDMwYTI3MWM5ZDRjOSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29vc2VcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4vUG9zdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0VXNlcixcclxuXHRQb3N0XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9tb2RlbHMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XHJcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XHJcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnZXJyb3JIYW5kbGVyJztcclxuaW1wb3J0IG11bHRlciBmcm9tICdtdWx0ZXInO1xyXG5pbXBvcnQgbHVzY2EgZnJvbSAnbHVzY2EnO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgc3R5bHVzIGZyb20gJ3N0eWx1cyc7XHJcbmltcG9ydCBuaWIgZnJvbSAnbmliJztcclxuaW1wb3J0IGNvbm5lY3Rtb25nbyBmcm9tICdjb25uZWN0LW1vbmdvJztcclxuaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcclxuXHJcbi8vIFJvdXRlc1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvZGF0YWJhc2UnLCAoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLi4uJyk7XHJcbn0pO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBNb25nb1N0b3JlID0gY29ubmVjdG1vbmdvKHNlc3Npb24pO1xyXG5cclxuLy8gVmlldyBlbmdpbmUgc2V0dXBcclxuXHJcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ3B1ZycpO1xyXG5cclxuLy8gbWlkZGxld2FyZXNcclxuYXBwLnVzZShsb2dnZXIoJ2RldicsIHtcclxuICBza2lwOiAoKSA9PiBhcHAuZ2V0KCdlbnYnKSA9PT0gJ3Rlc3QnXHJcbn0pKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5hcHAudXNlKCcvJywgcm91dGVzKTtcclxuYXBwLnVzZShzdHlsdXMubWlkZGxld2FyZSh7XHJcblx0c3JjOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljJyksXHJcblx0ZGVzdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYycpLFxyXG5cdHVzZTogW25pYigpXSxcclxuXHRpbXBvcnQ6IFsnbmliJ11cclxufSkpO1xyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMnKSkpO1xyXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xyXG5hcHAudXNlKHNlc3Npb24oe1xyXG4gIHJlc2F2ZTogdHJ1ZSxcclxuICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcclxuICBzZWNyZXQ6ICdhcHBTZXNzaW9uc1NlY3JldCcsXHJcbiAgc3RvcmU6IG5ldyBNb25nb1N0b3JlKHtcclxuXHR1cmw6ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2RhdGFiYXNlU2Vzc2lvbicsXHJcblx0Y29va2llOiB7XHJcblx0XHRtYXhBZ2U6IDUxODQwMDAwMFxyXG5cdH0sXHJcblx0YXV0b1JlY29ubmVjdDogdHJ1ZSxcclxuXHRjbGVhcl9pbnRlcnZhbDogMzYwMFxyXG4gIH0pXHJcbn0pKTtcclxuYXBwLnVzZShsdXNjYSh7XHJcbiAgICBjc3JmOiB0cnVlLFxyXG4gICAgY3NwOiB7XHJcblx0XHRwb2xpY3k6IHtcclxuXHRcdCdkZWZhdWx0LXNyYyc6ICdcXCdzZWxmXFwnJyxcclxuXHRcdCdpbWctc3JjJzogJyonXHJcblx0XHR9XHJcblx0fSxcclxuICAgIHhmcmFtZTogJ1NBTUVPUklHSU4nLFxyXG4gICAgcDNwOiAnQUJDREVGJyxcclxuICAgIGhzdHM6IHttYXhBZ2U6IDMxNTM2MDAwLCBpbmNsdWRlU3ViRG9tYWluczogdHJ1ZSwgcHJlbG9hZDogdHJ1ZX0sXHJcbiAgICB4c3NQcm90ZWN0aW9uOiB0cnVlLFxyXG4gICAgbm9zbmlmZjogdHJ1ZVxyXG59KSk7XHJcbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcclxuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xyXG5cclxuLy8gRXJyb3IgaGFuZGxlclxyXG5hcHAudXNlKGVycm9ySGFuZGxlcigpKTtcclxuXHJcbi8vIERlZmluZSB1cGxvYWRzXHJcbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7IGRlc3Q6IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLy4uL3VwbG9hZHMnKSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2FwcC5qcyIsImNvbnN0IGJhc2ljQ29udHJvbGxlciA9IHt9O1xyXG5cclxuYmFzaWNDb250cm9sbGVyLmdldCA9IChyZXEsIHJlcykgPT4ge1xyXG5cdHJlcy5yZW5kZXIoJ2luZGV4Jyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNpY0NvbnRyb2xsZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9jb250cm9sbGVycy9iYXNpY0NvbnRyb2xsZXIuanMiLCJpbXBvcnQgZGIgZnJvbSAnLi8uLi9tb2RlbHMvaW5kZXguanMnO1xyXG5cclxuY29uc3QgcG9zdENvbnRyb2xsZXIgPSB7fTtcclxuXHJcbnBvc3RDb250cm9sbGVyLnBvc3QgPSAocmVxLCByZXMpID0+IHtcclxuXHRjb25zdCB7XHJcblx0XHR0aXRsZSxcclxuXHRcdHRleHQsXHJcblx0XHRsaW5rLFxyXG5cdFx0dXNlcklkIC8vZ2V0IGZyb20ganNvbiB0b2tlblxyXG5cdH0gPSByZXEuYm9keTtcclxuXHJcblx0Ly8gVmFsaWRhdGlvblxyXG5cclxuXHRjb25zdCBwb3N0ID0gbmV3IGRiLlBvc3Qoe1xyXG5cdFx0dGl0bGUsXHJcblx0XHR0ZXh0LFxyXG5cdFx0bGluayxcclxuXHRcdF9jcmVhdG9yOiB1c2VySWRcclxuXHR9KTtcclxuXHJcblx0cG9zdC5zYXZlKCkudGhlbigobmV3UG9zdCkgPT4ge1xyXG5cdFx0cmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG5cdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRkYXRhOiBuZXdQb3N0XHJcblx0XHR9KTtcclxuXHR9KS5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRyZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcblx0XHRcdG1lc3NhZ2U6IGVyclxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcblxyXG5wb3N0Q29udHJvbGxlci5nZXRBbGwgPSAocmVxLCByZXMpID0+IHtcclxuXHRkYi5Qb3N0LmZpbmQoe30pLnBvcHVsYXRlKHtcclxuXHRcdHBhdGg6ICdfY3JlYXRvcicsXHJcblx0XHRzZWxlY3Q6ICd1c2VybmFtZSBjcmVhdGVkQXQgLV9pZCcsXHJcblx0XHRtYXRjaDogeyAnaXNEZWxldGVkJzogZmFsc2V9XHJcblx0fSkudGhlbigocG9zdHMpID0+IHtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0ZGF0YTogcG9zdHNcclxuXHRcdH0pO1xyXG5cdH0pLmNhdGNoKChlcnIpID0+IHtcclxuXHRcdHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuXHRcdFx0bWVzc2FnZTogZXJyXHJcblx0XHR9KTtcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RDb250cm9sbGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvY29udHJvbGxlcnMvcG9zdENvbnRyb2xsZXIuanMiLCJpbXBvcnQgZGIgZnJvbSAnLi8uLi9tb2RlbHMvaW5kZXguanMnO1xyXG5cclxuY29uc3QgdXNlckNvbnRyb2xsZXIgPSB7fTtcclxuXHJcbnVzZXJDb250cm9sbGVyLnBvc3QgPSAocmVxLCByZXMpID0+IHtcclxuXHRjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG5cdC8vIFZhbGlkYcOnw6NvXHJcblxyXG5cdGNvbnN0IHVzZXIgPSBuZXcgZGIuVXNlcih7XHJcblx0XHR1c2VybmFtZSxcclxuXHRcdHBhc3N3b3JkXHJcblx0fSk7XHJcblxyXG5cdHVzZXIuc2F2ZSgpLnRoZW4oKG5ld1VzZXIpID0+IHtcclxuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuXHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0ZGF0YTogbmV3VXNlclxyXG5cdFx0fSk7XHJcblx0fSkuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0cmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG5cdFx0XHRtZXNzYWdlOiBlcnJcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckNvbnRyb2xsZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9jb250cm9sbGVycy91c2VyQ29udHJvbGxlci5qcyIsImltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxuXHJcbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdSdW5uaW5nIG9uIHBvcnQgMzAwMC4uLicpO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL2luZGV4LmpzIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuXHJcbmNvbnN0IHBvc3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuXHR0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0bGluazogU3RyaW5nLFxyXG5cdHRleHQ6IFN0cmluZyxcclxuXHRpc0RlbGV0ZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuXHRjcmVhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcclxuXHRfY3JlYXRvcjogeyB0eXBlOiBTY2hlbWEuT2JqZWN0SWQsIHJlZjogJ1VzZXInIH1cclxufSk7XHJcblxyXG4vLyBlbmNyeXB0aW9uIGhlcmVcclxuXHJcbmNvbnN0IFBvc3QgPSBtb25nb29zZS5tb2RlbCgnUG9zdCcsIHBvc3RTY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXJ2ZXIvbW9kZWxzL1Bvc3QuanMiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG5cdHVzZXJuYW1lOiB7XHJcblx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdG1pbkxlbmd0aDogWzUsICdOb21lIGRlIHVzdcOhcmlvIHByZWNpc2EgdGVyIDUgY2FyYWN0ZXJlcyBvdSBtYWlzLiddXHJcblx0fSxcclxuXHRwYXNzd29yZDoge1xyXG5cdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRtaW5MZW5ndGg6IFs4LCAnQSBzZW5oYSBwcmVjaXNhIHRlciA4IGNhcmFjdGVyZXMgb3UgbWFpcy4nXVxyXG5cdH0sXHJcblx0aXNEZWxldGVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcblx0Y3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXHJcbn0pO1xyXG5cclxuLy8gZW5jcnlwdGlvbiBoZXJlXHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmVyL21vZGVscy9Vc2VyLmpzIiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuLy8gQ29udHJvbGxlcnMgSW1wb3J0c1xyXG5pbXBvcnQgYmFzaWNDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvYmFzaWNDb250cm9sbGVyJztcclxuaW1wb3J0IHVzZXJDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvdXNlckNvbnRyb2xsZXInO1xyXG5pbXBvcnQgcG9zdENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9wb3N0Q29udHJvbGxlcic7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBleHByZXNzKCk7XHJcblxyXG5yb3V0ZXMuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKTtcclxuXHJcbi8vIEJhc2ljIFJvdXRlc1xyXG5yb3V0ZXMuZ2V0KCcvJywgYmFzaWNDb250cm9sbGVyLmdldCk7XHJcblxyXG4vLyBVc2VyIHJvdXRlc1xyXG5yb3V0ZXMucG9zdCgnL3NpZ251cCcsIHVzZXJDb250cm9sbGVyLnBvc3QpO1xyXG5cclxuLy8gUG9zdCByb3V0ZXNcclxucm91dGVzLnBvc3QoJy9wb3N0JywgcG9zdENvbnRyb2xsZXIucG9zdCk7XHJcbnJvdXRlcy5nZXQoJy9wb3N0cycsIHBvc3RDb250cm9sbGVyLmdldEFsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlcnZlci9yb3V0ZXMuanMiLCIvKiFcbiAqIGVycm9yaGFuZGxlclxuICogQ29weXJpZ2h0KGMpIDIwMTAgU2VuY2hhIEluYy5cbiAqIENvcHlyaWdodChjKSAyMDExIFRKIEhvbG93YXljaHVrXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBKb25hdGhhbiBPbmdcbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBhY2NlcHRzID0gcmVxdWlyZSgnYWNjZXB0cycpXG52YXIgZXNjYXBlSHRtbCA9IHJlcXVpcmUoJ2VzY2FwZS1odG1sJylcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJylcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBET1VCTEVfU1BBQ0VfUkVHRVhQID0gL1xceDIwezJ9L2dcbnZhciBORVdfTElORV9SRUdFWFAgPSAvXFxuL2dcbnZhciBTVFlMRVNIRUVUID0gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsICcvcHVibGljL3N0eWxlLmNzcycpLCAndXRmOCcpXG52YXIgVEVNUExBVEUgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKF9fZGlybmFtZSwgJy9wdWJsaWMvZXJyb3IuaHRtbCcpLCAndXRmOCcpXG52YXIgaW5zcGVjdCA9IHV0aWwuaW5zcGVjdFxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudmFyIGRlZmVyID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IHNldEltbWVkaWF0ZVxuICA6IGZ1bmN0aW9uIChmbikgeyBwcm9jZXNzLm5leHRUaWNrKGZuLmJpbmQuYXBwbHkoZm4sIGFyZ3VtZW50cykpIH1cblxuLyoqXG4gKiBFcnJvciBoYW5kbGVyOlxuICpcbiAqIERldmVsb3BtZW50IGVycm9yIGhhbmRsZXIsIHByb3ZpZGluZyBzdGFjayB0cmFjZXNcbiAqIGFuZCBlcnJvciBtZXNzYWdlIHJlc3BvbnNlcyBmb3IgcmVxdWVzdHMgYWNjZXB0aW5nIHRleHQsIGh0bWwsXG4gKiBvciBqc29uLlxuICpcbiAqIFRleHQ6XG4gKlxuICogICBCeSBkZWZhdWx0LCBhbmQgd2hlbiBfdGV4dC9wbGFpbl8gaXMgYWNjZXB0ZWQgYSBzaW1wbGUgc3RhY2sgdHJhY2VcbiAqICAgb3IgZXJyb3IgbWVzc2FnZSB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIEpTT046XG4gKlxuICogICBXaGVuIF9hcHBsaWNhdGlvbi9qc29uXyBpcyBhY2NlcHRlZCwgY29ubmVjdCB3aWxsIHJlc3BvbmQgd2l0aFxuICogICBhbiBvYmplY3QgaW4gdGhlIGZvcm0gb2YgYHsgXCJlcnJvclwiOiBlcnJvciB9YC5cbiAqXG4gKiBIVE1MOlxuICpcbiAqICAgV2hlbiBhY2NlcHRlZCBjb25uZWN0IHdpbGwgb3V0cHV0IGEgbmljZSBodG1sIHN0YWNrIHRyYWNlLlxuICpcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlcnJvckhhbmRsZXIgKG9wdGlvbnMpIHtcbiAgLy8gZ2V0IGVudmlyb25tZW50XG4gIHZhciBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXG5cbiAgLy8gZ2V0IG9wdGlvbnNcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9XG5cbiAgLy8gZ2V0IGxvZyBvcHRpb25cbiAgdmFyIGxvZyA9IG9wdHMubG9nID09PSB1bmRlZmluZWRcbiAgICA/IGVudiAhPT0gJ3Rlc3QnXG4gICAgOiBvcHRzLmxvZ1xuXG4gIGlmICh0eXBlb2YgbG9nICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBsb2cgIT09ICdib29sZWFuJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBsb2cgbXVzdCBiZSBmdW5jdGlvbiBvciBib29sZWFuJylcbiAgfVxuXG4gIC8vIGRlZmF1bHQgbG9nZ2luZyB1c2luZyBjb25zb2xlLmVycm9yXG4gIGlmIChsb2cgPT09IHRydWUpIHtcbiAgICBsb2cgPSBsb2dlcnJvclxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGVycm9ySGFuZGxlciAoZXJyLCByZXEsIHJlcywgbmV4dCkge1xuICAgIC8vIHJlc3BlY3QgZXJyLnN0YXR1c0NvZGVcbiAgICBpZiAoZXJyLnN0YXR1c0NvZGUpIHtcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gZXJyLnN0YXR1c0NvZGVcbiAgICB9XG5cbiAgICAvLyByZXNwZWN0IGVyci5zdGF0dXNcbiAgICBpZiAoZXJyLnN0YXR1cykge1xuICAgICAgcmVzLnN0YXR1c0NvZGUgPSBlcnIuc3RhdHVzXG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBzdGF0dXMgY29kZSB0byA1MDBcbiAgICBpZiAocmVzLnN0YXR1c0NvZGUgPCA0MDApIHtcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgfVxuXG4gICAgLy8gbG9nIHRoZSBlcnJvclxuICAgIHZhciBzdHIgPSBzdHJpbmdpZnkoZXJyKVxuICAgIGlmIChsb2cpIHtcbiAgICAgIGRlZmVyKGxvZywgZXJyLCBzdHIsIHJlcSwgcmVzKVxuICAgIH1cblxuICAgIC8vIGNhbm5vdCBhY3R1YWxseSByZXNwb25kXG4gICAgaWYgKHJlcy5faGVhZGVyKSB7XG4gICAgICByZXR1cm4gcmVxLnNvY2tldC5kZXN0cm95KClcbiAgICB9XG5cbiAgICAvLyBuZWdvdGlhdGVcbiAgICB2YXIgYWNjZXB0ID0gYWNjZXB0cyhyZXEpXG4gICAgdmFyIHR5cGUgPSBhY2NlcHQudHlwZSgnaHRtbCcsICdqc29uJywgJ3RleHQnKVxuXG4gICAgLy8gU2VjdXJpdHkgaGVhZGVyIGZvciBjb250ZW50IHNuaWZmaW5nXG4gICAgcmVzLnNldEhlYWRlcignWC1Db250ZW50LVR5cGUtT3B0aW9ucycsICdub3NuaWZmJylcblxuICAgIC8vIGh0bWxcbiAgICBpZiAodHlwZSA9PT0gJ2h0bWwnKSB7XG4gICAgICB2YXIgaXNJbnNwZWN0ID0gIWVyci5zdGFjayAmJiBTdHJpbmcoZXJyKSA9PT0gdG9TdHJpbmcuY2FsbChlcnIpXG4gICAgICB2YXIgZXJyb3JIdG1sID0gIWlzSW5zcGVjdFxuICAgICAgICA/IGVzY2FwZUh0bWxCbG9jayhzdHIuc3BsaXQoJ1xcbicsIDEpWzBdIHx8ICdFcnJvcicpXG4gICAgICAgIDogJ0Vycm9yJ1xuICAgICAgdmFyIHN0YWNrID0gIWlzSW5zcGVjdFxuICAgICAgICA/IFN0cmluZyhzdHIpLnNwbGl0KCdcXG4nKS5zbGljZSgxKVxuICAgICAgICA6IFtzdHJdXG4gICAgICB2YXIgc3RhY2tIdG1sID0gc3RhY2tcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gJzxsaT4nICsgZXNjYXBlSHRtbEJsb2NrKHYpICsgJzwvbGk+JyB9KVxuICAgICAgICAuam9pbignJylcbiAgICAgIHZhciBib2R5ID0gVEVNUExBVEVcbiAgICAgICAgLnJlcGxhY2UoJ3tzdHlsZX0nLCBTVFlMRVNIRUVUKVxuICAgICAgICAucmVwbGFjZSgne3N0YWNrfScsIHN0YWNrSHRtbClcbiAgICAgICAgLnJlcGxhY2UoJ3t0aXRsZX0nLCBlc2NhcGVIdG1sKGV4cG9ydHMudGl0bGUpKVxuICAgICAgICAucmVwbGFjZSgne3N0YXR1c0NvZGV9JywgcmVzLnN0YXR1c0NvZGUpXG4gICAgICAgIC5yZXBsYWNlKC9cXHtlcnJvclxcfS9nLCBlcnJvckh0bWwpXG4gICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04JylcbiAgICAgIHJlcy5lbmQoYm9keSlcbiAgICAvLyBqc29uXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnanNvbicpIHtcbiAgICAgIHZhciBlcnJvciA9IHsgbWVzc2FnZTogZXJyLm1lc3NhZ2UsIHN0YWNrOiBlcnIuc3RhY2sgfVxuICAgICAgZm9yICh2YXIgcHJvcCBpbiBlcnIpIGVycm9yW3Byb3BdID0gZXJyW3Byb3BdXG4gICAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IGVycm9yIH0sIG51bGwsIDIpXG4gICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpXG4gICAgICByZXMuZW5kKGpzb24pXG4gICAgLy8gcGxhaW4gdGV4dFxuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOCcpXG4gICAgICByZXMuZW5kKHN0cilcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUZW1wbGF0ZSB0aXRsZSwgZnJhbWV3b3JrIGF1dGhvcnMgbWF5IG92ZXJyaWRlIHRoaXMgdmFsdWUuXG4gKi9cblxuZXhwb3J0cy50aXRsZSA9ICdDb25uZWN0J1xuXG4vKipcbiAqIEVzY2FwZSBhIGJsb2NrIG9mIEhUTUwsIHByZXNlcnZpbmcgd2hpdGVzcGFjZS5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWxCbG9jayAoc3RyKSB7XG4gIHJldHVybiBlc2NhcGVIdG1sKHN0cilcbiAgLnJlcGxhY2UoRE9VQkxFX1NQQUNFX1JFR0VYUCwgJyAmbmJzcDsnKVxuICAucmVwbGFjZShORVdfTElORV9SRUdFWFAsICc8YnI+Jylcbn1cblxuLyoqXG4gKiBTdHJpbmdpZnkgYSB2YWx1ZS5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSAodmFsKSB7XG4gIHZhciBzdGFjayA9IHZhbC5zdGFja1xuXG4gIGlmIChzdGFjaykge1xuICAgIHJldHVybiBTdHJpbmcoc3RhY2spXG4gIH1cblxuICB2YXIgc3RyID0gU3RyaW5nKHZhbClcblxuICByZXR1cm4gc3RyID09PSB0b1N0cmluZy5jYWxsKHZhbClcbiAgICA/IGluc3BlY3QodmFsKVxuICAgIDogc3RyXG59XG5cbi8qKlxuICogTG9nIGVycm9yIHRvIGNvbnNvbGUuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2dlcnJvciAoZXJyLCBzdHIpIHtcbiAgY29uc29sZS5lcnJvcihzdHIgfHwgZXJyLnN0YWNrKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Vycm9ySGFuZGxlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWNjZXB0c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFjY2VwdHNcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3QtbW9uZ29cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb25uZWN0LW1vbmdvXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVzY2FwZS1odG1sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXNjYXBlLWh0bWxcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZnNcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibHVzY2FcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsdXNjYVwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibXVsdGVyXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5pYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5pYlwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhc3Nwb3J0XCJcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWx1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0eWx1c1wiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXRpbFwiXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9