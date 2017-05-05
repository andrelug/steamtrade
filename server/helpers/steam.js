import auth from './config';
import db from './../models/index.js';
import passport from 'passport';
import SteamStrategy from 'passport-steam';
import https from 'https';
import steamInventory from './steamInventory';
import Promise from 'bluebird';
import redis from 'redis';

Promise.promisifyAll(redis.RedisClient.prototype);

// create a new redis client and connect to our local redis instance
const client = redis.createClient();

// if an error occurs, print it to the console
client.on('error', function(err) {
    console.log("Error " + err);
});

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

            const verifiedUser = checkUser(user, identifier, profile, done);

            checkCache(verifiedUser, profile, done);

        }).catch((err) => {
            console.log(err);
            return done(err);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(identifier, done) {
    db.User.find({
        openId: identifier.openId
    }).then((user) => {
        done(null, user);
    }).catch((err) => {
        console.log(err);
        return done(err);
    });

});


const checkUser = (user, identifier, profile, done) => {
    if (user) {
        return user;
    } else {

        const newUser = new db.User({
            personaname: profile._json.personaname,
            realname: profile._json.realname,
            avatar: profile._json.avatarmedium,
            loccountrycode: profile._json.loccountrycode,
            communityvisibilitystate: profile._json.communityvisibilitystate,
            locstatecode: profile._json.locstatecode,
            loccityid: profile._json.loccityid,
            openId: identifier
        });

        newUser.save().then((savedUser) => {
            return savedUser;
        }).catch((err) => {
            console.log(err);
            return done(err);
        });
    }
};

const checkCache = (verifiedUser, profile, done) => {
    // Check if result is cached
    client.getAsync(verifiedUser.openId).then((inventory) => {
        if (inventory) {
            done(null, verifiedUser);
        } else {
            createCache(profile, verifiedUser, done);
        }

    }).catch((err) => {
        console.log(`Redis error: ${err}`);
        return done(err);
    });
};

const createCache = (profile, verifiedUser, done) => {
    // Get user inventory for CSGO
    steamInventory.getInventoryFromGame(profile._json.steamid, 730, 'english', 5000).then((data) => {

        var userInventory = JSON.parse(data);
        // Create redis cache
        client.setex(verifiedUser.openId, 30, userInventory);

        // Update database
        verifiedUser.inventory.assets = userInventory.assets;
        verifiedUser.inventory.descriptions = userInventory.descriptions;
        verifiedUser.inventory.total_inventory_count = userInventory.total_inventory_count;

        verifiedUser.save().then((updatedUser) => {
            console.log('deu bom: ' + updatedUser);
            return done(null, updatedUser);
        }).catch((err) => {
            console.log('deu ruim: ' + err)
            return done(err);
        });



    }).catch((err) => {
        console.log(`steamInventory error: ${err}`);
        return done(err);
    });
};




export default passport;
