exports.getMain = (req, res, next) => {
	res.redirect('/main');
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
	const lat = req.query.x;
	const lng = req.query.y;

	res.render('admin/service', {
		pageTitle: 'PeeLace',
		path: '/main',
		lat: lat,
		lng: lng,
	});
}; 

