/**
 * Created by doyen on 2015/9/6.
 */
define([
	'memo/templates/main'
], function (PageTemplate) {
	return Backbone.View.extend({
		myTemplate: PageTemplate["scripts/memo/templates/template.hbs"],
	    initialize: function () {
			this.render();
		},
		render: function () {
			this.$el.append(this.myTemplate);
		}
	})
})
