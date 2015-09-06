/**
 * Created by doyen on 2015/9/6.
 */
define([
	'account/router',
	'contact/router',
	'calculate/router',
	'memo/router'
], function () {
	var routers = Array.prototype.slice.apply(arguments);

	return routers;
});