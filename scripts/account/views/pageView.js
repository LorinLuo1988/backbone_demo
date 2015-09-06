/**
 * Created by doyen on 2015/9/6.
 */
define([
	'account/templates/main'
], function (PageTemplate) {
	return Backbone.View.extend({
		myTemplate: PageTemplate["scripts/account/templates/template.hbs"],
	    initialize: function () {
			this.render();
		},
		render: function () {
			this.$el.append(this.myTemplate);
		}
	})
})
