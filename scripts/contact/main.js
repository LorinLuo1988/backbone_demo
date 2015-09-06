/**
 * Created by doyen on 2015/9/6.
 */
define([
	'contact/views/pageView',
	'contact/models/pageModel'
], function (PageView, PageModel) {
	function initialize () {
		var pageView = new PageView({
			model: new PageModel()
		});

		$('#content').html(pageView.$el);
	}

	return {
		initialize: initialize
	};
})
