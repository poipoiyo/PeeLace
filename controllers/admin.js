exports.getMain = (req, res, next) => {
	res.redirect('/main');
};

exports.getAbout = (req, res, next) => {
	res.render('about/about', {
		pageTitle: 'About us',
		path: '/about'
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

