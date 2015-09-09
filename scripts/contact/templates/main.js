define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["scripts/contact/templates/contactTemplate.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<li class=\"list-group-item clearfix\">\r\n	<input type=\"checkbox\" class=\"pull-left\"/>\r\n	<img class=\"pull-left\" src=\""
    + alias2(alias1((depth0 != null ? depth0.portrait : depth0), depth0))
    + "\" alt=\"\"/>\r\n	<div class=\"pull-left\">\r\n		<h4 class=\"contact-name text-primary\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\r\n		<p class=\"contact-phone text-muted\">"
    + alias2(alias1((depth0 != null ? depth0.phone : depth0), depth0))
    + "</p>\r\n	</div>\r\n    <span class=\"deleteCurrentContact pull-right glyphicon glyphicon-trash\"></span>\r\n    <span class=\"editCurrentContact pull-right glyphicon glyphicon-edit\"></span>\r\n</li>";
},"useData":true});

this["JST"]["scripts/contact/templates/template.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container contact\">\r\n    <div class=\"row\">\r\n        <div class=\"panel panel-success\">\r\n            <div class=\"panel-heading\">\r\n                <h4>\r\n					通讯录\r\n                </h4>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n				<form class=\"form-horizontal\" onsubmit=\"return false;\">\r\n                    <div class=\"form-group contact-control\">\r\n                        <div class=\"col-sm-2 col-xs-4 col-md-1 col-lg-1\">\r\n                            <div class=\"checkbox\">\r\n								<label for=\"selectAll\">\r\n									<input type=\"checkbox\" id=\"selectAll\"/>\r\n                                    全选\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n						<div class=\"col-sm-4 col-xs-3 col-md-2 col-lg-2\">\r\n							<div class=\"btn-group\">\r\n								<div class=\"btn-group sort\" role=\"group\">\r\n									<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n										排序\r\n										<span class=\"caret\"></span>\r\n									</button>\r\n									<ul class=\"dropdown-menu\">\r\n										<li class=\"sort-by\" sortBy=\"name\"><a href=\"#contact\">姓名</a></li>\r\n										<li class=\"sort-by\" sortBy=\"phone\"><a href=\"#contact\">号码</a></li>\r\n									</ul>\r\n								</div>\r\n                            </div>\r\n						</div>\r\n						<div class=\"col-sm-5 col-xs-5 col-md-5 col-lg-5\">\r\n							<div class=\"btn-group\">\r\n								<button class=\"btn btn-default addContact\">增加</button>\r\n								<button class=\"btn btn-danger deleteContact\">删除</button>\r\n							</div>\r\n						</div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <ul class=\"list-group contact-list\">\r\n\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

return this["JST"];

});