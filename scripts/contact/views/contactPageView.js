/**
 * Created by doyen on 2015/9/7.
 */
define([
	'contact/templates/main',
	'components/modal/main'
], function (PageTemplate, ModalTemplate) {
	return Backbone.View.extend({
		myTemplate: PageTemplate["scripts/contact/templates/contactTemplate.hbs"],
		modalTemplate: function () {
			var context = {
				editContact: true,
				title: '编辑联系人',
				name: this.model.attributes.name,
				phone: this.model.attributes.phone
			};

			return PageTemplate["scripts/components/modal/modal.hbs"](context);
		},
		initialize: function () {
			this.listenTo(this.model, 'change:checked', this.render);
			this.render();
		},
		events: {
			'click input[type=checkbox]': 'toggleDone',
			'mouseenter': 'mouseEnter',
			'mouseleave': 'mouseLeave',
			'mouseenter .deleteCurrentContact': 'enterDeleteIcon',
			'mouseleave .deleteCurrentContact': 'leaveDeleteIcon',
			'click .deleteCurrentContact': 'deleteCurrentContact',
			'mouseenter .editCurrentContact': 'enterEditIcon',
			'mouseleave .editCurrentContact': 'leaveEditIcon',
			'click .editCurrentContact': 'editCurrentContact',
			'click .edit-contact-success': 'editCurrentContactComplate'
		},
		render: function () {
			this.$el.html(this.myTemplate(this.model.attributes));
			this.$('input[type=checkbox]').prop('checked', this.model.get('checked'));

			return this;
		},
		toggleDone: function () {
			this.model.toggle();
		},
		mouseEnter: function () {
			this.$el.css('cursor', 'pointer');
			this.$('.deleteCurrentContact').css('display', 'block');
			this.$('.editCurrentContact').css('display', 'block');
		},
		mouseLeave: function () {
			this.$('.deleteCurrentContact').css('display', 'none');
			this.$('.editCurrentContact').css('display', 'none');
		},
		enterDeleteIcon: function () {
			this.$('.deleteCurrentContact').css('color', 'red');
		},
		leaveDeleteIcon: function () {
			this.$('.deleteCurrentContact').css('color', '#333');
		},
		enterEditIcon: function () {
			this.$('.editCurrentContact').css('color', 'red');
		},
		leaveEditIcon: function () {
			this.$('.editCurrentContact').css('color', '#333');
		},
		deleteCurrentContact: function () {
			this.model.destroy();
		},
		editCurrentContact: function () {
			$('#myModal').remove();
			this.$el.append(this.modalTemplate());

			this.$('#myModal').modal({
				show: true
			});
			this.$('#alert').hide();
			this.$('#nameExistAlert').hide();
		},
		editCurrentContactComplate: function () {
			var name = this.$('#myModal .contact-name').val();
			var phone = this.$('#myModal .contact-phone').val();
			var self = this;

			if (name && phone) {
				var nameArr = this.model.collection.pluck('name');
				var nameExist = _.indexOf(nameArr, name);

				this.$('#alert').hide();

				if (nameExist != -1 && name != this.model.get('name')) {
					this.$('#nameExistAlert').slideDown(200, 'linear');
					return false;
				}

				this.$('#myModal').modal('hide');

				setTimeout(function () {
					self.model.set({
						'name': name,
						'phone': phone
					});

					self.model.collection.reset(self.model.collection.models);
				}, 300);
			} else {
				this.$('#nameExistAlert').hide();
				this.$('#alert').slideDown(200, 'linear');
			}
		}
	})
})