/**
 * Created by doyen on 2015/9/7.
 */
define([
	'contact/models/contactModel'
], function (ContactModel) {
	var originModels = localStorage.getItem('contactList');

	return Backbone.Collection.extend({
		model: ContactModel,
		initialize: function () {
			this.on('change:checked', this.isAllChecked);
			this.on('destroy', this.checkModelLeave);
			this.on('reset', this.resetCallback);
		},
		allChecked: false,
		comparator: 'phone',
		originModels: originModels ? JSON.parse(originModels) : [
			{name: '卡卡', phone: '13520123564', portrait: 'imgs/lorin.jpg'},
			{name: '韦德', phone: '13620123567', portrait: 'imgs/lorin.jpg'},
			{name: '库里', phone: '13820126564', portrait: 'imgs/lorin.jpg'},
			{name: '哈登', phone: '13525535674', portrait: 'imgs/lorin.jpg'},
			{name: '杜兰特', phone: '13990123563', portrait: 'imgs/lorin.jpg'}
		],
		addModels: function () {
			this.reset(this.originModels);
		},
		isAllChecked: function () {
			var checkedCounter = 0;
			var length = this.models.length;

			_.each(this.models, function (model) {
				if (!model.get('checked')) {
					return false;
				}

				checkedCounter++;
			});

			if (checkedCounter == length && !this.allChecked) {
				this.allChecked = true;
			} else if (checkedCounter != length && this.allChecked){
				this.allChecked = false;
			} else {
				return false;
			}

			this.trigger('allChecked');
		},
		checkModelLeave: function (model) {
			if (!this.models.length) {
				this.allChecked = false;

				this.trigger('allChecked');
			}
		},
		resetCallback: function () {
			var checkedArr = this.pluck('checked');

			if (checkedArr.length && _.indexOf(checkedArr, false) == -1) {
				this.allChecked = true;
				this.trigger('allChecked');
			} else {
				this.allChecked = false;
			}
		}
	})
})