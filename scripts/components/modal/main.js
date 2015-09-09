define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["scripts/components/modal/modal.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "						<div class=\"col-md-12\">\r\n							<p class=\"text-danger\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.tip : depth0), depth0))
    + "</p>\r\n						</div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "							<div class=\"col-md-12\">\r\n								<p class=\"text-danger\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.tip : depth0), depth0))
    + "</p>\r\n							</div>\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "							<div class=\"col-md-12\">\r\n								<form class=\"form-horizontal\" role=\"form\">\r\n                                    <div class=\"form-group\">\r\n										<label for=\"\" class=\"control-label col-xs-4 col-sm-2 col-md-2 col-lg-2\">姓名:</label>\r\n                                        <div class=\"col-xs-8 col-sm-10 col-md-10 col-lg-10\">\r\n											<input type=\"text\" class=\"form-control contact-name\" placeholder=\"姓名\" required/>\r\n                                        </div>\r\n                                    </div>\r\n									<div class=\"form-group\">\r\n										<label for=\"\" class=\"control-label col-xs-4 col-sm-2 col-md-2 col-lg-2\">号码:</label>\r\n										<div class=\"col-xs-8 col-sm-10 col-md-10 col-lg-10\">\r\n											<input type=\"number\" class=\"form-control contact-phone\" placeholder=\"号码\" required/>\r\n										</div>\r\n									</div>\r\n									<div class=\"form-group\">\r\n										<label for=\"\" class=\"control-label col-xs-4 col-sm-2 col-md-2 col-lg-2\"></label>\r\n										<div class=\"col-xs-8 col-sm-10 col-md-10 col-lg-10\">\r\n											<div id=\"alert\" class=\"alert alert-danger alert-dismissible fade in\" role=\"alert\">\r\n												<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n												<strong>Error!</strong> 请输入完整的姓名和电话号码.\r\n											</div>\r\n											<div id=\"nameExistAlert\" class=\"alert alert-danger alert-dismissible fade in\" role=\"alert\">\r\n												<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n												<strong>Error!</strong> 联系人已存在, 请重新输入.\r\n											</div>\r\n										</div>\r\n									</div>\r\n                                </form>\r\n							</div>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "							<div class=\"col-md-12\">\r\n								<form class=\"form-horizontal\" role=\"form\">\r\n									<div class=\"form-group\">\r\n										<label for=\"\" class=\"control-label col-xs-4 col-sm-2 col-md-2 col-lg-2\">姓名:</label>\r\n										<div class=\"col-xs-8 col-sm-10 col-md-10 col-lg-10\">\r\n											<input type=\"text\" value=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\" class=\"form-control contact-name\" placeholder=\"姓名\" required/>\r\n										</div>\r\n									</div>\r\n									<div class=\"form-group\">\r\n										<label for=\"\" class=\"control-label col-xs-4 col-sm-2 col-md-2 col-lg-2\">号码:</label>\r\n										<div class=\"col-xs-8 col-sm-10 col-md-10 col-lg-10\">\r\n											<input type=\"number\" value=\""
    + alias2(alias1((depth0 != null ? depth0.phone : depth0), depth0))
    + "\" class=\"form-control contact-phone\" placeholder=\"号码\" required/>\r\n										</div>\r\n									</div>\r\n									<div class=\"form-group\">\r\n										<label for=\"\" class=\"control-label col-xs-4 col-sm-2 col-md-2 col-lg-2\"></label>\r\n										<div class=\"col-xs-8 col-sm-10 col-md-10 col-lg-10\">\r\n											<div id=\"alert\" class=\"alert alert-danger alert-dismissible fade in\" role=\"alert\">\r\n												<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n												<strong>Error!</strong> 请输入完整的姓名和电话号码.\r\n											</div>\r\n											<div id=\"nameExistAlert\" class=\"alert alert-danger alert-dismissible fade in\" role=\"alert\">\r\n												<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\r\n												<strong>Error!</strong> 联系人已存在, 请重新输入.\r\n											</div>\r\n										</div>\r\n									</div>\r\n								</form>\r\n							</div>\r\n";
},"9":function(depth0,helpers,partials,data) {
    return "					<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">取消</button>\r\n					<button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">确定</button>\r\n";
},"11":function(depth0,helpers,partials,data) {
    return "					<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">取消</button>\r\n					<button type=\"button\" class=\"btn btn-success delete-contact-success\" data-dismiss=\"modal\">确定</button>\r\n";
},"13":function(depth0,helpers,partials,data) {
    return "					<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">取消</button>\r\n					<button type=\"button\" class=\"btn btn-success add-contact-success\">确定</button>\r\n";
},"15":function(depth0,helpers,partials,data) {
    return "					<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">取消</button>\r\n					<button type=\"button\" class=\"btn btn-success edit-contact-success\">确定</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"myModal\" class=\"modal fade\" role=\"dialog\" aria-labelledby=\"gridSystemModalLabel\">\r\n	<div class=\"modal-dialog\" role=\"document\">\r\n		<div class=\"modal-content\">\r\n			<div class=\"modal-header\">\r\n				<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n				<h4 class=\"modal-title text-muted\" id=\"gridSystemModalLabel\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</h4>\r\n			</div>\r\n			<div class=\"modal-body\">\r\n				<div class=\"container-fluid\">\r\n					<div class=\"row\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.nullDeleteModal : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.fillDeleteModal : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.addContact : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.editContact : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\r\n				</div>\r\n			</div>\r\n			<div class=\"modal-footer\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.nullDeleteModal : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.fillDeleteModal : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.addContact : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.editContact : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n		</div><!-- /.modal-content -->\r\n	</div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n";
},"useData":true});

return this["JST"];

});