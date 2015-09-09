/**
 * Created by doyen on 2015/9/6.
 */
define(['base/lorinRouter'], function (lorinRouter) {
	return lorinRouter.extend({
		//routes: {
		//	"account": "account"
		//},
		account: function () {
			this.switchWindow('account');
		},
		initialize: function () {
			this.route('account', this.account);
			this.route('', this.account);
		}
	});
})
