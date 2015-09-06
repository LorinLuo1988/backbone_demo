/**
 * Created by doyen on 2015/9/2.
 */
define(['header/templates/main'], function (PageTemplate) {
	return Backbone.View.extend({
		tagName: 'nav',
		myTemplate: PageTemplate["scripts/header/templates/template.hbs"],
		events: {
			"click li": 'clickCallback'
		},
		initialize: function () {
			this.render();
		},
		attributes: function () {
			return {
				class: 'nav'
			}
		},
		render: function () {
			this.$el.append(this.myTemplate(this.model.attributes));

			return this;
		},
		clickCallback: function (event) {

		}
	});
})
