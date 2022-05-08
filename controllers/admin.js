
exports.getMain = (req, res, next) => {
	res.redirect('/main');
};

exports.getService = (req, res, next) => {
	res.render('admin/service', {
		pageTitle: 'PeeLace',
		path: '/main',
		startPos: '',
	});
};

exports.getAbout = (req, res, next) => {
	res.render('admin/about', {
		pageTitle: 'About us',
		path: '/about'
	});
};

exports.getError = (req, res, next) => {
	res.render('admin/server-error', {
		pageTitle: 'Server Error',
		path: '/server-error'
	});
};


exports.getUserLatLng = (req, res, next) => {
	const userLatlng = req.params.latlng;
	
	res.render('admin/service', {
		pageTitle: 'PeeLace',
		path: '/main',
		startPos: userLatlng,
	});
}; 

