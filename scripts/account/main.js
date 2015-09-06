/**
 * Created by doyen on 2015/9/6.
 */
define([
	'account/views/pageView',
	'account/models/pageModel'
], function (PageView, PageModel) {
	function initialize () {
		var pageView = new PageView({
			model:  PageModel
		});

		$('#content').html(pageView.$el);
	}

	return {
		initialize: initialize
	};
})
