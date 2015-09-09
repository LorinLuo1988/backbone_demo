/**
 * Created by doyen on 2015/9/8.
 */
define([], function () {
	return Backbone.Model.extend({
		defaults: {
			nullDeleteModal: {
				nullDeleteModal: true,
				title: '删除联系人',
				tip: '没有被选中的联系人'
			},
			fillDeleteModal: {
				fillDeleteModal: true,
				title: '删除联系人',
				tip: '你确定要删除选中的联系人吗'
			},
			addModal: {
				addContact: true,
				title: '新增联系人'
			},
			pagination: {
				pageNumber: 0,
				number: 6,
				currentPage: 1
			}
		}
	})
})
