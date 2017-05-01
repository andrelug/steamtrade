const basicController = {};

basicController.get = (req, res) => {
	res.json({
		"message": "hi"
	});
};

export default basicController;
