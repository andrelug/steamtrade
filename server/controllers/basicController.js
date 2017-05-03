const basicController = {};

basicController.get = (req, res) => {
	res.write('<!DOCTYPE html>');
	if (req.user) {
        res.write(req.session.passport &&
            JSON.stringify(req.user) || 'None');
        res.write('<form action="/api/steam/logout" method="post">');
        res.write('<input type="submit" value="Log Out"/></form>');
    } else {
        if (req.query.steamid) {
            res.write('Not logged in.');
        }
        res.write('<form action="/api/steam" method="post">');
        res.write(
            '<input name="submit" type="image" src="http://steamcommunity-a.' +
            'akamaihd.net/public/images/signinthroughsteam/sits_small.png" ' +
            'alt="Sign in through Steam"/></form>');
    }
    res.send();
};

export default basicController;
