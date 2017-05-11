import express from 'express';
const app = express();
const envir = {};

// config/database.js
if('development' === app.settings.env) {
    envir.mondb = {
        'url': 'mongodb://localhost:27017/database',
        'url2': 'mongodb://localhost:27017/databaseSession'
    };

	envir.redisdb = {
		'url': ''
	}
}else{
    envir.mondb = {
        'url': process.env.CUSTOMCONNSTR_MONGOLAB_URI,
        'url2': process.env.CUSTOMCONNSTR_MONGOLAB_URIA
    };

	envir.redisdb = {
		'url': process.env.CUSTOMCONNSTR_MONGOLAB_URIA
	}
}

export default envir;
