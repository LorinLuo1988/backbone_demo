/**
 * Created by doyen on 2015/9/2.
 */
define([], function () {
	return Backbone.Model.extend({
		defaults: {
				nav: [
					{
						name: "记账大师",
						url: "account"
					},
					{
						name: "计算器",
						url: "calculate"
					},
					{
						name: "通讯录",
						url: "contact"
					},
					{
						name: "备忘录",
						url: "memo"
					}
				]
			}
		});
})