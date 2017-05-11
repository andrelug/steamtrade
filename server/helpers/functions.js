import steamInventory from './steamInventory';
import Promise from 'bluebird';
import redis from 'redis';
import db from './../models/index.js';
import { client } from './../app';

const functions = {};

functions.checkUser = (user, identifier, profile, done) => {
	return new Promise((resolve, reject) => {
		if (user) {
			resolve(user);
		} else {

			const newUser = new db.User({
				personaname: profile._json.personaname,
				realname: profile._json.realname,
				avatar: profile._json.avatarmedium,
				loccountrycode: profile._json.loccountrycode,
				communityvisibilitystate: profile._json.communityvisibilitystate,
				locstatecode: profile._json.locstatecode,
				loccityid: profile._json.loccityid,
				steamid: profile._json.steamid,
				openId: identifier
			});

			newUser.save().then((savedUser) => {
				resolve(savedUser);
			}).catch((err) => {
				reject(err);
			//	return done(null, false);
			});
		}
	});
};

functions.checkCache = (verifiedUser, done) => {
    // Check if result is cached

    client.getAsync(verifiedUser.openId).then((inventory) => {
        if (inventory) {
			if (done) {
				done(null, verifiedUser);
			} else {
				return inventory;
			}

        } else {
			if (done) {
				functions.createCache(verifiedUser, done);
			} else {
				return functions.createCache(verifiedUser);
			}

        }

    }).catch((err) => {
        console.log(`Redis error: ${err}`);
		if (done) {
        	return done(null, false);
		} else {
			throw err;
		}
    });
};

// TODO: Criar primise para passar para userController
functions.createCache = (verifiedUser, done) => {
    // Get user inventory for CSGO
    steamInventory.getInventoryFromGame(verifiedUser.steamid, 730, 'english', 5000).then((data) => {

        var userInventory = JSON.parse(data);
        // Create redis cache
        client.setex(verifiedUser.openId, 30, userInventory);

        // Update database
        verifiedUser.inventory.assets = userInventory.assets;
        verifiedUser.inventory.descriptions = userInventory.descriptions;
        verifiedUser.inventory.total_inventory_count = userInventory.total_inventory_count;

        verifiedUser.save().then((updatedUser) => {
			if (done) {
				return done(null, updatedUser);
			} else {
				return userInventory;
			}

        }).catch((err) => {
            return done(null, false);
        });



    }).catch((err) => {
        console.log(`steamInventory error: ${err}`);
        return done(null, false);
    });
};

export default functions;
