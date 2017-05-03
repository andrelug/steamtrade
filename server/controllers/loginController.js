import db from './../models/index.js';
import passport from './../helpers/steam';

const loginController = {};

loginController.get = passport.authenticate('steam', { failureRedirect: '/api' });


loginController.logout = (req, res) => {
    req.logout();
    // After logging out, redirect the user somewhere useful.
    // Where they came from or the site root are good choices.
    res.redirect(req.get('Referer') || '/api');
};

export default loginController;
