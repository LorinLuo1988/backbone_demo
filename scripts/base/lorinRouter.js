/**
 * Created by doyen on 2015/9/6.
 */
define([], function () {
	return Backbone.Router.extend({
		switchWindow: function (url) {
			$('#header li').removeClass('active');
			$('#header li[role=' + url + ']').addClass('active');

			require([url + '/main'], function (main) {
				main.initialize();
			});
		}
	});
})