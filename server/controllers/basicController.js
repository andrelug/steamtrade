const basicController = {};

basicController.get = (req, res) => {
	res.render('index');
};

export default basicController;
