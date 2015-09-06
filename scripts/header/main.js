/**
 * Created by doyen on 2015/9/2.
 */
define(['header/views/pageView', 'header/models/pageModel'], function (PageView, PageModel) {
	var pageView = new PageView({
		model: new PageModel()
	});

	$('#header').append(pageView.$el);   //$el---jquery object   el---dom object
})