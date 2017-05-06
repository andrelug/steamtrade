import db from './../models/index.js';
import functions from './../helpers/functions';

const userController = {};

userController.getAll = (req, res) => {
	var items = functions.checkCache(req.user);
	console.log('items:' + items);
	res.status(200).json({
		success: true,
		data: items
	});
};

export default userController;
