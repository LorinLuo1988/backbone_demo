define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["scripts/header/templates/template.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "        <li role=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\"><a href=\"#"
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</a></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.nav : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

return this["JST"];

});