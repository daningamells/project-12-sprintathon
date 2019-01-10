var keystone = require('keystone');
var Page = keystone.list('Page');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.on('init', function (next) {

		var q = Page.model.findOne({
			state: 'published'
		});

		q.exec(function (err, result) {
			locals.page = result;
			console.log(locals.page.Heading)
			next(err);

		});

	});


	console.log(req.body)

	// Render the view
	view.render('index');
};
