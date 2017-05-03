import auth from './config';
import db from './../models/index.js';
import passport from 'passport';
import SteamStrategy from 'passport-steam';
import https from 'https';
import steamUserInventory from 'steam-user-inventory';

passport.use(new SteamStrategy({
    returnURL: auth.steam.returnURL,
    realm: auth.steam.realm,
    apiKey: auth.steam.apiKey
  },
  function(identifier, profile, done) {
	  console.log('ponto 1: ' + identifier + 'profile: ' + JSON.stringify(profile));
    db.User.find({ 'auth.steam.openId': identifier }).then((user) => {
		console.log('bla: ' + profile._json.steamid);
		steamUserInventory(profile._json.steamid).then((data) => {
			console.log('inventario: ' + JSON.stringify(data));
		});

		if(user !== '') {
			console.log('ponto 5: ' + user);
			return done(null, user);
		} else {
			const newUser = new db.User({
				'auth.steam.openId': identifier
			});

			newUser.save().then((savedUser) => {
				console.log('ponto 2');
				return done(null, savedUser);
			}).catch((err) => {
				console.log(err);
			});
		}
	}).catch((err) => {
		console.log(err);
	});
  }
));

passport.serializeUser(function(user, done) {
	console.log('ponto 3');
    done(null, user);
});

passport.deserializeUser(function(identifier, done) {
	db.User.find({ 'auth.steam.openId': identifier[0].auth.steam.openId }).then((user) => {
		done(null, user);
	}).catch((err) => {
		console.log(err);
	});

});


export default passport;
