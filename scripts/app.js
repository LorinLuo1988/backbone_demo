/**
 * Created by doyen on 2015/9/2.
 */
require.config({
	baseUrl: '/backbone/demo/scripts',
	paths: {
		jquery: '../lib/jquery-1.11.2.min',
		backbone: '../lib/backbone',
		json2: '../lib/json2',
		handlebars: '../lib/handlebars-v3.0.0',
		underscore: '../lib/underscore',
		bootstrap: '../lib/bootstrap.min',
		main: './main',
		routers: './routers/main'
	},
	packages: ['header'],
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery', 'json2'],
			exports: 'Backbone'
		},
		underscore: {
			deps: [],
			exports: "_"
		},
		bootstrap: {
			deps: ['jquery']
		}
	}
});

require(['main'], function (main) {

})
