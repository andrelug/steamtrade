import auth from './config';
import db from './../models/index.js';
import passport from 'passport';
import SteamStrategy from 'passport-steam';
import functions from './functions';

passport.use(new SteamStrategy({
        returnURL: auth.steam.returnURL,
        realm: auth.steam.realm,
        apiKey: auth.steam.apiKey
    },
    function(identifier, profile, done) {

        // Check for existing user
        db.User.findOne({
            openId: identifier
        }).then((user) => {

            const verifiedUser = functions.checkUser(user, identifier, profile, done).then((verifiedUser) => {

	            functions.checkCache(verifiedUser, done);
			});


        }).catch((err) => {
            console.log(err);
            return done(null, false);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    db.User.findById(id).then((user) => {
        done(null, user);
    });
});




export default passport;
