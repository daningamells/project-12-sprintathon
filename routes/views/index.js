var keystone = require('keystone');
var Page = keystone.list('Page');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;

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

	view.on('post', { action: 'contact' }, function (next) {
		console.log("1")
		var newEnquiry = new Enquiry.model();
			console.log("2")
		var updater = newEnquiry.getUpdateHandler(req);
			console.log("3")
		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, message',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
	});

	// Render the view
	view.render('index');
};
