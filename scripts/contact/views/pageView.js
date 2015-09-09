/**
 * Created by doyen on 2015/9/6.
 */
define([
	'contact/templates/main',
	'contact/collections/contactCollection',
	'contact/views/contactPageView',
	'contact/models/contactModel',
	'components/modal/main',
	'components/pagination/main'
], function (PageTemplate, ContactCollection, ContactPageView, ContactModel, ModalTemplate, PaginationTemplate) {
	var contactCollection = new ContactCollection();

	return Backbone.View.extend({
		myTemplate: PageTemplate["scripts/contact/templates/template.hbs"],
		modalTemplate: function (context) {
			return ModalTemplate["scripts/components/modal/modal.hbs"](context);
		},
		paginationTemplate: function () {
			var totalCount = this.collection.models.length;
			var count = this.model.attributes.pagination.number;
			var pageNumber = Math.ceil(totalCount / count);
			var pageNumberArr = [];

			this.model.set('pageNumber', pageNumber);

			for (var i = 1; i <= pageNumber; i++) {
				pageNumberArr.push(i);
			}

			return PaginationTemplate["scripts/components/pagination/pagination.hbs"]({
				pageNumber: pageNumberArr
			});
		},
		collection: contactCollection,
	    initialize: function () {
			this.listenTo(contactCollection, 'add', this.renderContactList);
			this.listenTo(contactCollection, 'allChecked', this.allChecked);
			this.listenTo(contactCollection, 'reset', this.renderContactList);
			this.listenTo(contactCollection, 'destroy', this.renderContactList);
			this.listenTo(contactCollection, 'change', this.renderContactList);
			this.render();
			this.allCheckbox = this.$('#selectAll');
			this.collection.addModels();
		},
		events: {
			'click #selectAll': 'toggleAll',
			'click .addContact': 'addNewContact',
			'click .deleteContact': 'deleteSelectContact',
			'click .delete-contact-success': 'deleteSelectContactComplete',
			'click .add-contact-success': 'addContactComplete',
			'click .sort-by': 'sortBy',
			'click .prev-page': 'goPrevPage',
			'click .next-page': 'goNextPage',
			'click .fix-page': 'goFixPage'
		},
		render: function () {
			this.$el.append(this.myTemplate);
		},
		renderContactList: function () {
			var view = null;
			var self = this;
			var currentPage = this.model.get('pagination').currentPage + 1;

			this.model.get('pagination').pageNumber = Math.ceil(this.collection.models.length / this.model.get('pagination').number) - 1;

			self.$('.contact-list').html('');

			_.each(this.collection.models, function (model, index) {
				if (index >= self.model.get('pagination').currentPage * 6 && index < (self.model.get('pagination').currentPage + 1) * 6) {
					view = new ContactPageView({
						model: model
					});

					self.$('.contact-list').append(view.$el);
				}
			});

			var contactListJson = JSON.stringify(
				$.map(this.collection.models, function (model) {
					return model;
				})
			);

			this.$('.pagination').remove();
			this.$('.panel').append(this.paginationTemplate());

			localStorage.setItem('contactList', contactListJson);
			this.setActivePage(currentPage);
		},
		sortBy: function (event) {
			this.collection.comparator = $(event.currentTarget).attr('sortBy');
			this.collection.reset(this.collection.models);
		},
		toggleAll: function () {
			var isChecked = this.allCheckbox.prop('checked');

			this.collection.each(function (model) {
				model.set('checked', isChecked);
			})
		},
		allChecked: function () {
			this.allCheckbox.prop('checked', this.collection.allChecked);
		},
		deleteSelectContact: function () {
			var selectLength = 0;

			_.each(this.collection.models, function (model) {
				if (model.get('checked')) {
					selectLength++;
				}
			});

			if (selectLength) {
				this.$('#myModal').remove();
				this.$el.append(this.modalTemplate(this.model.attributes.fillDeleteModal));

				$('#myModal').modal({
					show: true
				});

				return false;
			}

			this.$('#myModal').remove();
			this.$el.append(this.modalTemplate(this.model.attributes.nullDeleteModal));

			$('#myModal').modal({
				show: true
			});
		},
		deleteSelectContactComplete: function () {
			var length = this.collection.models.length;

			for (var i = 0, j = 0; i < length; i++, j++) {
				if (this.collection.models[j].get('checked')) {
					this.collection.models[j].destroy();
					j--;
				}
			}
		},
		addNewContact: function () {
			this.$('#myModal').remove();
			this.$el.append(this.modalTemplate(this.model.attributes.addModal));

			this.$('#myModal').modal({
				show: true
			});

			this.$('#alert').hide();
			this.$('#nameExistAlert').hide();

		},
		addContactComplete: function () {
			var name = this.$('#myModal .contact-name').val();
			var phone = this.$('#myModal .contact-phone').val();

			if (name && phone) {
				var nameArr = this.collection.pluck('name');

				var nameExist = _.indexOf(nameArr, name);

				this.$('#alert').hide();

				if (nameExist != -1) {
					this.$('#nameExistAlert').slideDown(200, 'linear');
					return false;
				}

				this.collection.add(new ContactModel({
					name: name,
					phone: phone,
					portrait: 'imgs/lorin.jpg',
					checked: this.collection.allChecked
				}));

				$('#myModal').modal('hide');
			} else {
				this.$('#nameExistAlert').hide();
				this.$('#alert').slideDown(200, 'linear');
			}
		},
		goPrevPage: function () {
			this.model.get('pagination').currentPage--;

			if (this.model.get('pagination').currentPage <= 0) {
				this.model.get('pagination').currentPage = 0;
			}

			this.collection.reset(this.collection.models);
		},
		goNextPage: function () {
			this.model.get('pagination').currentPage++;

			if (this.model.get('pagination').currentPage >= this.model.get('pagination').pageNumber) {
				this.model.get('pagination').currentPage = this.model.get('pagination').pageNumber;
			}

			this.collection.reset(this.collection.models);
		},
		goFixPage: function (event) {
			var currentPage = this.$(event.currentTarget).text() - 1;

			this.model.get('pagination').currentPage = currentPage;

			this.collection.reset(this.collection.models);
		},
		setActivePage: function (currentPage) {
			var paginationLiList = this.$('.pagination li.fix-page');
			for (var i = 0; i < paginationLiList.length; i++) {
				if (currentPage == parseInt(this.$(paginationLiList[i]).text())) {
					this.$(paginationLiList[i]).addClass('active');
				}
			}
		}
	})
})
