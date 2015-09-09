/**
 * Created by doyen on 2015/9/6.
 */
define([], function () {
	return Backbone.Model.extend({
		defaults: {
			name: '李华',
			phone: '13520123564',
			portrait: 'imgs/lorin.jpg',
			checked: false
		},
		toggle: function () {
			this.set('checked', !this.get('checked'));
		}
	})
})