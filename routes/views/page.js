var keystone = require('keystone');
var Page = keystone.list('Page');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'page';

	view.on('init', function (next) {

		var q = Page.model.findOne({
			state: 'published'
		});

		q.exec(function (err, result) {
			locals.page = result;
      console.log(result)
			next(err);
		});

	});


	// Render the view
	view.render('homepage');
};
