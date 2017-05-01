import db from './../models/index.js';

const userController = {};

userController.post = (req, res) => {
	const { username, password } = req.body;

	// Validação

	const user = new db.User({
		username,
		password
	});

	user.save().then((newUser) => {
		res.status(200).json({
			success: true,
			data: newUser
		});
	}).catch((err) => {
		res.status(500).json({
			message: err
		});
	});
};

export default userController;
