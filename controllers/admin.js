
exports.getService = (req, res, next) => {
	res.render('admin/service', {
		pageTitle: 'PeeLace',
		path: '/'
	});
};

exports.getAbout = (req, res, next) => {
	res.render('admin/about', {
		pageTitle: 'About us',
		path: '/about'
	});
};
