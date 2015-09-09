/**
 * Created by doyen on 2015/9/2.
 */
define(['backbone', 'jquery', 'handlebars', 'bootstrap'], function (Backbone, $, Handlebars) {
	Handlebars.registerHelper('ifCond', function(v1, v2, options) {
		if(v1 === v2) {
			return options.fn(this);
		}
		return options.inverse(this);
	});

	Handlebars.registerHelper("inc", function(value, options)
	{
		return parseInt(value) + 1;
	});

	window.Handlebars = Handlebars;

	require(['header'], function (header) {
		require(['routers'], function (routers) {
			_.each(routers, function (router) {
				new router();
			});

			Backbone.history.start();

		});
	});
})