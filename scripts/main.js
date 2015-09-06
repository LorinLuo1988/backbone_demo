/**
 * Created by doyen on 2015/9/2.
 */
define(['backbone', 'jquery', 'handlebars'], function (Backbone, $, Handlebars) {
	Handlebars.registerHelper('ifCond', function(v1, v2, options) {
		if(v1 === v2) {
			return options.fn(this);
		}
		return options.inverse(this);
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