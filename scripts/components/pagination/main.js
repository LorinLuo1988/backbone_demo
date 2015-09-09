define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["scripts/components/pagination/pagination.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "			<li class=\"prev-page\">\r\n				<a aria-label=\"Previous\">\r\n					<span aria-hidden=\"true\">&laquo;</span>\r\n				</a>\r\n			</li>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pageNumber : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			<li class=\"next-page\">\r\n				<a aria-label=\"Next\">\r\n					<span aria-hidden=\"true\">&raquo;</span>\r\n				</a>\r\n			</li>\r\n";
},"2":function(depth0,helpers,partials,data) {
    return "				<li class=\"fix-page\"><a>"
    + this.escapeExpression((helpers.inc || (depth0 && depth0.inc) || helpers.helperMissing).call(depth0,(data && data.index),{"name":"inc","hash":{},"data":data}))
    + "</a></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<nav>\r\n    <ul class=\"pagination\" style=\"margin: 5px 0px 0px 5px;\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.pageNumber : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</nav>";
},"useData":true});

return this["JST"];

});