import db from './../models/index.js';

const postController = {};

postController.post = (req, res) => {
	const {
		title,
		text,
		link,
		userId //get from json token
	} = req.body;

	// Validation

	const post = new db.Post({
		title,
		text,
		link,
		_creator: userId
	});

	post.save().then((newPost) => {
		res.status(200).json({
			success: true,
			data: newPost
		});
	}).catch((err) => {
		res.status(500).json({
			message: err
		});
	});
};

postController.getAll = (req, res) => {
	db.Post.find({}).populate({
		path: '_creator',
		select: 'username createdAt -_id',
		match: { 'isDeleted': false}
	}).then((posts) => {
		res.status(200).json({
			success: true,
			data: posts
		});
	}).catch((err) => {
		res.status(500).json({
			message: err
		});
	});
};

export default postController;
